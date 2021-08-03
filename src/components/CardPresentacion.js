import React from 'react';
import {Card} from "react-bootstrap";
import depo from "../img/depositoGeneral.jpeg"
import campo from "../img/campo.jpeg"
import transporteBB from "../img/transporteBB.JPG"
import estibaBigBag from "../img/estibaBigBag.JPG"
import bolsaAzucar from "../img/bolsaAzucar1.png"
import areaPlanta from "../img/areaPlanta.JPG"
import deposito from "../img/deposito.JPG"
import estibasSky from "../img/estibasSky.JPG"
import { Link } from 'react-router-dom';

const CardPresentacion = () => {
    return (
        <Card className="tarjetas1 p-3">
             <Card.Header><h3 className="display-6"><b>Productos y Servicios</b></h3></Card.Header>
<section className="row">
<div className="col-sm-12 col-md-3">
  <div className="contenedor my-3">
  <img className="imagen w-100" src={campo} />
  </div>
  <Link to="/servicios/agro" className="links2 tex"><h4>Agro</h4></Link>
    
    <hr className="w-25"/>
   
      <p>Produccion propia de caña de azucar y granos.</p>
      <p>Provision de servicios agricolas</p>
    {/* <p>Produccion de caña de azucar</p>
    <p>Produccion de granos </p>
    <p>Provision de servicios agricolas</p>   */}
</div>
<div className="col-sm-12 col-md-3">
  <div className="contenedor my-3">
  <img className="imagen w-100" src={transporteBB} />
  </div>
  <Link to="/servicios/logistica" className="links2"><h4>Logistica</h4></Link>
    <hr className="w-50"/>
    <p>
      Transporte de corta y larga distancia, habilitados para servicios en todo el Mercosur.

    </p>

</div>
<div className="col-sm-12 col-md-3">
  <div className="contenedor my-3">
  <img className="imagen" src={estibasSky} />
  </div>
  <Link to="/servicios/almacenaje" className="links2"><h4>Almacenaje</h4></Link>
    <hr className="w-50"/>
    <p>
      Transporte de corta y larga distancia, habilitados para servicios en todo el Mercosur.
    </p>
</div>
<div className="col-sm-12 col-md-3">
  <div className="contenedor my-3">
  <img className="imagen" src={depo} />
  </div> 
  <Link to="/productos" className="links2"><h4>Productos</h4></Link>
    <hr className="w-50"/>
    <p>
      Produccion y comercializacion de azucar
    </p>
</div>
</section>
        </Card>
    );
};

export default CardPresentacion;