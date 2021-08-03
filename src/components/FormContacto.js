import React, {useState } from 'react';
import { Form, Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faUser, faBuilding, faComment, faTruck } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import emailjs from "emailjs-com";

const FormContacto = () => {

  const [formConsult, setFormConsult] =useState ({
    nomAp: "",
    empresa:"",
    email:"",
    tel: "",
    consulta:""
  });

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
      setNomApValid("");
      setNomApInvalid("")
      const texto = expresiones.nombre;
      if(formConsult.nomAp.trim() == "" || !texto.test(formConsult.nomAp)){
        setNomApInvalid(true);
        return true
      }else{
        setNomApValid(true);
        return false
      }
  }
  const validarEmail = ()=>{
    setEmailValid("");
    setEmailInvalid("");
    const emailT = expresiones.email;
    if(formConsult.email.trim()=="" || !emailT.test(formConsult.email)){
      setEmailInvalid(true);
      return true
    }else{
      setEmailValid(true);
      return false
    }
  }
const validarTel = ()=>{
  setTelValid("");
  setTelInvalid("");
  const telefono = expresiones.telefono;
  if(formConsult.tel.trim()=="" || !telefono.test(formConsult.tel)){
    setTelInvalid(true);
    return true
  }else{
    setTelValid(true)
    return false
  }
}


const validarConsulta = ()=>{
  setConsultaValid("");
  setConsultaInvalid("");
  const  consultaT = expresiones.consulta;
  if(formConsult.consulta.trim()=="" || !consultaT.test(formConsult.consulta)){
setConsultaInvalid(true);
return true
  }else{
    setConsultaValid(true);
    return false
  }
}


  const handleSubmit = (e)=>{
    e.preventDefault();
    enviarConsulta();
    
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
             Swal.fire(
               "Consulta enviada",
               "Su consulta fue enviada, nos pondremos en contacto con usted a la brevedad",
               "success"
             );
           }
           console.log(result);
         },
         (error) => {
           console.log(error.text);
         }
       );
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
</Form>
</Card>
    );
};

export default FormContacto;