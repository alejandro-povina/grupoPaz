import React from 'react';
import FormContacto from './FormContacto';
import {Card, Container, Nav} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const Contacto = () => {
    return (
        <div className="fondo2">
        <Container  className="m-navbar">
            <div className="row">
                <div className="col-sm-12 col-md-6 my-4">
            <FormContacto></FormContacto>
                </div>
                <div className="col-sm-12 col-md-6">
                    <Card className="my-4 tarjetas1 bg-white p-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227917.73607917127!2d-65.41336860043792!3d-26.801293872216917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa7f8b1a839f585b1!2sGrupo%20Paz!5e0!3m2!1ses!2sar!4v1628029983735!5m2!1ses!2sar"  loading="lazy" className="mapa" title="mapa"></iframe>
                    <div className=" my-2">
                    <Nav.Link target="_blank" rel="noreferrer" className="ubic" href="https://www.google.com/maps/place/Grupo+Paz,+Tucum%C3%A1n/@-26.842184,-65.147824,17z/data=!4m2!3m1!1s0x942259e74029f255:0xa7f8b1a839f585b1?hl=es&gl=AR"><FontAwesomeIcon icon={faMapMarkedAlt} className="ubic turn"></FontAwesomeIcon> Buscar en GoogleMaps</Nav.Link>
                    </div>
                    </Card>
                    <Card className="my-4 tarjetas1 bg-white p-2">
                    <div className="row">
                    <div className="col-sm-6 col-md-6">
                    <h6> <FontAwesomeIcon icon={faMapMarkerAlt} className="ubic turn"></FontAwesomeIcon> Ubicacion</h6>
                    <p className="small">Ruta Provincial 302 - km 6<br/>
                    Cevil Pozo - CP 4178<br/>
                    Banda del Río Salí - Tucumán<br/>
                    Argentina<br/></p>
                    </div>
                    <div className="col-sm-6 col-md-6">
                    <h6> <FontAwesomeIcon icon={faPhoneAlt} className="ubic turn"></FontAwesomeIcon> Telefono</h6>
                    <p className="small">(+54) 3815 233262</p>
                    <h6> <FontAwesomeIcon icon={faEnvelope} className="ubic turn"></FontAwesomeIcon> Email</h6>
                    <p className="small">grupopazsvasg@gmail.com</p>
                    </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Container>
        </div>
    );
};

export default Contacto;