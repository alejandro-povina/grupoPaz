import React from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";




const Footer = () => {
    return (
        <div className="foot text-light pb-2 row mt-0 mx-0">
                <div className="col-sm-12 col-md-4 my-3">
                    <p className="mb-1"><b> Navegacion</b></p>
                    <Dropdown.Divider />
                    <div className="d-flex justify-content-evenly">
                    <div className="box">
                        <Link to="/" className="links">Inicio</Link>
                        <Link to="/empresa" className="links">La Empresa</Link>
                        <Link to="/contacto" className="links">Contacto</Link>
                        <Link to="/productos" className="links">Productos</Link> 
                    </div>
                    <div className="box">
                    <Link to="/servicios/logistica" className="links">Logistica</Link>
                        <Link to="/servicios/almacenaje" className="links">Almacenaje</Link>
                         <Link to="/servicios/agro" className="links">Agro</Link>
                    </div>
            </div>
                    
            </div>
            
            <div className="col-sm-12 col-md-4 my-3">
            <Link to="/contacto" className="links"><b>Contacto</b></Link>
            <Dropdown.Divider/>
            <div className="d-flex justify-content-center">
            <div className="box">
            <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> grupopazsvasg@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> (+54) 3815 233262</p>
            </div>
            </div>
           </div>
            <div className="col-sm-12 col-md-4 my-3">
            <Nav.Link target="_blank" rel="noreferrer" className=" links mt-0 py-0" href="https://www.google.com/maps/place/Grupo+Paz,+Tucum%C3%A1n/@-26.842184,-65.147824,17z/data=!4m2!3m1!1s0x942259e74029f255:0xa7f8b1a839f585b1?hl=es&gl=AR"><FontAwesomeIcon icon={faMapMarkerAlt} className="ubic turn"></FontAwesomeIcon> <b>Ubicacion</b> </Nav.Link>
            
               
            <Dropdown.Divider />
            <div className="d-flex justify-content-center">

            <div className="box">
            <p>Ruta Provincial 302 - km 6</p>
            <p>Cevil Pozo - Banda del Río Salí</p>
            <p>Tucumán - Argentina</p>
            </div>
            </div>
            </div>
            <div className="container small">
        <hr color="white"/>
        <p>&copy; 2021 - GRUPO PAZ Todos los derechos reservados</p> 
        </div>
        </div>
        
         
    );
};

export default withRouter(Footer);