import React from 'react';
import { Card } from 'react-bootstrap';
import campo from "../img/campo.jpeg"
import "../App.css"

const Tarjetas = () => {
    return (
<div className="card tarjeta1 foot">
  <img src={campo} class="card-img-top foot" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">AGRO</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

       
    );
};

export default Tarjetas;