import React from 'react';
import { withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import {Container, Card} from "react-bootstrap"
import depo from "../img/depositoGeneral.jpeg"
import siempreVerde from "../img/siempreverde.png"
import sanGeronimo from "../img/AzucareraSanGeronimo.png"
import campo from "../img/campo.jpeg"
import estibasSky from "../img/estibasSky.JPG"
import transporteBB from "../img/transporteBB.JPG"
import grupoPaz from "../img/grupo.png"
import confiabilidad from '../img/system.png'
import velocidad from '../img/speed.png'
import inteligencia from '../img/light-bulb.png'
import experiencia from '../img/supply-chain.png'
import ItemBotones from './ItemBotones';
import CardPresentacion from './CardPresentacion';

const Inicio = () => {

  

    return (
        <div className="m-navbar fondo1"> 
          <Container className=""> 
          <Card className="tarjetas1 my-3">
          <div className="row mb-4 mx-3">
            <div className="col-sm-12 col-md-6 col-lg-4 ">
            <div className="d-flex flex-wrap align-items-center justify-content-center container">
              <div>
          <img src={grupoPaz} className="w-100 mt-0" alt="" />
              </div>
              <div>
          <ItemBotones></ItemBotones>
              </div>
            </div>  
            </div>
          <div className="col-sm-12 col-md-6 col-lg-8 mt-4">
          <h3 className="display-6 text-sm-center text-md-start">¿Quienes Somos?</h3>
          <hr/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum rem officiis consequatur voluptatibus placeat, ratione amet ipsa veniam veritatis laudantium sint?</p>
              <div className="d-flex justify-content-end me-5">
              <div >
              <Link to="/empresa" className="me-1 mt-0 bot text-light">Ver Mas</Link>
              </div>
              </div>
            <div className="mt-5 row">
              <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">
            <img src={siempreVerde}className="altura"  alt="" /> 
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6  d-flex justify-content-center">
          <img src={sanGeronimo} className="altura" alt="" />
              </div>
            </div>
          </div>
          </div>
          </Card>  
<Card className="w-100 tarjetas1 my-5">
  <Card.Header> <h3 className="display-6">Por que elegirnos?</h3></Card.Header>
  <Card.Body className="row">
    <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
<div className="d-flex justify-content-center align-items-center"><img src={confiabilidad} alt="" className="Iconos" /></div>
<div className="px-3">
<h4>Experiencia</h4>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima modi magnam illo. Eos, vitae modi.</p>
</div>
    </div>
    <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
<div className="d-flex justify-content-center align-items-center"><img src={experiencia} alt="" className="Iconos" /></div>
<div className="px-3">
<h4>Confiabilidad</h4>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima modi magnam illo. Eos, vitae modi.</p>
</div>
    </div>
    <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
<div className="d-flex justify-content-center align-items-center"><img src={inteligencia} alt="" className="Iconos" /></div>
<div className="px-3">
<h4>Crecimiento e Innovacion</h4>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima modi magnam illo. Eos, vitae modi.</p>
</div>
    </div>
    <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center px-2">
<div className="d-flex justify-content-center align-items-center"><img src={velocidad} alt="" className="Iconos" /></div>
<div className="px-3"> 
<h4>Eficiencia </h4>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima modi magnam illo. Eos, vitae modi.</p>
</div>
    </div>
  </Card.Body>
</Card>
</Container>
<div className=" pb-2">
<Container>
  <CardPresentacion></CardPresentacion>
  <h3 className="py-3 text-light"><b>Productos y Servicios</b></h3>
<div className="row">
<div className="col-sm-12 col-md-3">
<Card className="tarjetas1 my-3">
  <div className="contenedor">
  <Card.Img variant="top" className="imagen" src={campo} />
  </div>
  <Card.Body>
    <Card.Title><b>Agro</b></Card.Title>
    <Card.Text>
      <p>Produccion propia de caña de azucar y granos.</p>
      <p>Provision de servicios agricolas</p>
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className="col-sm-12 col-md-3">
<Card className="tarjetas1 my-3">
  <div className="contenedor">
  <Card.Img variant="top" className="imagen" src={transporteBB} />
  </div>
  <Card.Body>
    <Card.Title>Logistica</Card.Title>
    <Card.Text>
      Transporte de corta y larga distancia, habilitados para servicios en todo el Mercosur.
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className="col-sm-12 col-md-3">
<Card className="tarjetas1 my-3">
  <div className="contenedor">
  <Card.Img variant="top" className="imagen" src={estibasSky} />
  </div>
  <Card.Body>
    <Card.Title>Almacenaje</Card.Title>
    <Card.Text>
      Transporte de corta y larga distancia, habilitados para servicios en todo el Mercosur.
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className="col-sm-12 col-md-3">
<Card className="tarjetas1 my-3">
  <div className="contenedor">
  <Card.Img variant="top" className="imagen mt-1" src={depo} />
  </div>
  <Card.Body>
    <Card.Title>Productos</Card.Title>
    <Card.Text>
      Produccion y comercializacion de azucar
    </Card.Text>
  </Card.Body>
</Card>
</div>
</div>
</Container>
</div>
</div>

    );
};

export default withRouter(Inicio);