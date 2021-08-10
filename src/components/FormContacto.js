import React, {useState } from 'react';
import { Form, Button, Card} from 'react-bootstrap';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faUser, faBuilding, faComment} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import emailjs from "emailjs-com";
import MsjError from './MsjError';

const FormContacto = (props) => {

  const [formConsult, setFormConsult] =useState ({
    nomAp: "",
    empresa:"",
    email:"",
    tel: "",
    consulta:""
  });
  const [error, setError]=useState(false);

  //states para feedback
  const [nomApValid, setNomApValid] = useState("");
  const [nomApInvalid, setNomApInvalid] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [emailInvalid, setEmailInvalid] = useState("");
  const [telValid, setTelValid] = useState("");
  const [telInvalid, setTelInvalid] = useState("");
  const [consultaValid, setConsultaValid] = useState("");
  const [consultaInvalid, setConsultaInvalid] = useState("");

   const mensajeEJS = {
     from_name: formConsult.nomAp,
     to_name: "Grupo Paz",
     datos: `Email: ${formConsult.email} - 
     Telefono: ${formConsult.tel} - 
     Empresa: ${formConsult.empresa} `,
     consulta: formConsult.consulta
   };

 //expresiones Reg
 const expresiones={ 
    nombre: /^[a-zA-ZÀ-ÿ\s]{6,30}$/, // Letras y espacios, pueden llevar acentos.
    consulta: /^[a-zA-Z0-9-ZÀ-ÿ\s]{10,300}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{7,15}$/, // 7 a 14 numeros.
    email: /\w+@\w+\.[a-z]{2,30}$/,
    }

    const handleValores = (e) => {
      setFormConsult({ ...formConsult, [e.target.name]: e.target.value })
  }

  //validaciones
  const validarNomAp = () =>{
    console.log(formConsult)
      setNomApValid("");
      setNomApInvalid("")
      const texto = expresiones.nombre;
      if(formConsult.nomAp.trim() ==="" || !texto.test(formConsult.nomAp)){
        setNomApInvalid(true);
        console.log("no valido")
        return true
      }else{
        setNomApValid(true);
        return false
      }
  }
  const validarEmail = ()=>{
    console.log(formConsult)
    setEmailValid("");
    setEmailInvalid("");
    const emailT = expresiones.email;
    if(formConsult.email.trim()==="" || !emailT.test(formConsult.email)){
      setEmailInvalid(true);
      console.log("no valido")
      return true
    }else{
      setEmailValid(true);
      return false
    }
  }
const validarTel = ()=>{
  console.log(formConsult)
  setTelValid("");
  setTelInvalid("");
  const telefono = expresiones.telefono;
  if(formConsult.tel.trim()==="" || !telefono.test(formConsult.tel)){
    setTelInvalid(true);
    console.log("no valido")
    return true
  }else{
    setTelValid(true)
    return false
  }
}


const validarConsulta = ()=>{
  console.log(formConsult)
  setConsultaValid("");
  setConsultaInvalid("");
  const  consultaT = expresiones.consulta;
  if(formConsult.consulta.trim()==="" || !consultaT.test(formConsult.consulta)){
setConsultaInvalid(true);
console.log("no valido")
return true
}else{
  setConsultaValid(true);
  return false
  }
}

const limpiarForm = (e) => {
  e.target.reset(e)
  setNomApValid("");
  setConsultaValid("");
  setEmailValid("");
  setTelValid("");
  setError(false);
  setFormConsult({
    nomAp: "",
    empresa:"",
    email:"",
    tel: "",
    consulta:""
  })
};



  const handleSubmit = (e)=>{
    console.log(formConsult)
    e.preventDefault();
    if(validarNomAp(formConsult.nomAp) || validarEmail(formConsult.email)|| validarTel(formConsult.tel) || validarConsulta(formConsult.consulta)){
      console.log("debe validar todos los campos")
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }else{
      console.log("enviando msj")
      enviarConsulta();
      limpiarForm(e);
      scrollToTop();
      console.log(formConsult)
      
    }  
  }

 
  //enviar consulta EmailJS
   const enviarConsulta = (e) => {
     emailjs
       .send(
         "service_rv2mgme",
         "template_eelpw3w",
         mensajeEJS,
         "user_wpyRroNYiS1PONkZ8OEJe"
       )
       .then(
         (result) => {
           if (result.status === 200) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'center',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            Toast.fire({
              icon: 'success',
              title: 'Su consulta fue enviada correctamente'
            })       
           }
           console.log(result);
         },
         (error) => {
           console.log(error)
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'error',
            title: 'Ha ocurido un error, intentelo de nuevo mas tarde'
          })
         }
       );
   };

   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

    return (
        <Card className="tarjetas1 bg-white">
            <Card.Header className="botones text-light text-center"><h3>Formulario de contacto</h3></Card.Header>
        <Form className="px-3" onSubmit={handleSubmit}>
  <Form.Group className="mt-3">
    <Form.Label><FontAwesomeIcon icon={faUser} className="ubic turn"></FontAwesomeIcon> Nombre y Apellido</Form.Label>
    <Form.Control 
    type="text" 
    name="nomAp"
    maxLength = "30"
    placeholder="Ingrese su nombre y apellido"
    onBlur={validarNomAp}
    isValid={nomApValid}
    isInvalid={nomApInvalid}
    onChange={handleValores}
   />
    <Form.Control.Feedback type="invalid" className="text-danger small">
              Ingrese un nombre valido.
            </Form.Control.Feedback>
  </Form.Group>
  <Form.Group className="mt-3">
    <Form.Label><FontAwesomeIcon icon={faEnvelope} className="ubic turn"></FontAwesomeIcon> Email</Form.Label>
    <Form.Control 
    type="email" 
    name="email"
    maxLength="30"
    placeholder="Ingrese su direccion de correo electronico"
    onBlur={validarEmail}
    isValid={emailValid}
    isInvalid={emailInvalid}
    onChange={handleValores} />
     <Form.Control.Feedback type="invalid" className="text-danger small">
              Ingrese una direccion de email valida.
            </Form.Control.Feedback>
  </Form.Group>
  <Form.Group className="mt-3">
    <Form.Label><FontAwesomeIcon icon={faBuilding} className="ubic turn"></FontAwesomeIcon> Empresa</Form.Label>
    <Form.Control 
    type="text"
    name="empresa"
    maxLength = "30" 
    placeholder="Ingrese el nombre de la empresa"
    onChange={handleValores} />
  </Form.Group>
  <Form.Group className="mt-3">
    <Form.Label><FontAwesomeIcon icon={faPhoneAlt} className="ubic turn"></FontAwesomeIcon> Telefono</Form.Label>
    <Form.Control 
    type="tel"
    name="tel" 
    maxLength = "16"
    placeholder="Ingrese un numero de contacto"
    onBlur={validarTel}
    isValid={telValid}
    isInvalid={telInvalid}
    onChange={handleValores} />
     <Form.Control.Feedback type="invalid" className="text-danger small">
              Ingrese un numero de telefono valido. Debe comenzar con su codigo de area.
            </Form.Control.Feedback>
  </Form.Group>
  <Form.Group className="mt-3">
  <Form.Label><FontAwesomeIcon icon={faComment} className="ubic turn"></FontAwesomeIcon> Consulta</Form.Label>
  <Form.Control
      as="textarea"
      name="consulta"
      maxLength = "300"
      placeholder="Ingrese su consulta"
      onBlur={validarConsulta}
    isValid={consultaValid}
    isInvalid={consultaInvalid}
      onChange={handleValores}
      style={{ height: '100px' }}
    />
    <Form.Label>
              <p>{formConsult.consulta.length}/300</p>
            </Form.Label>
            <Form.Control.Feedback type="invalid" className="text-danger small">
              Campo Obligatorio, debe contener al menos entre 10-300
              caracteres.
            </Form.Control.Feedback>
  </Form.Group>
  <Button className="w-100 my-3 botones" type="submit">
    Enviar
  </Button>
  {
          (error) ? (<MsjError text1="Datos incorrectos" text2="Todos los campos son obligatorios." />) : (null)
          }
</Form>
</Card>
    );
};

export default withRouter(FormContacto);