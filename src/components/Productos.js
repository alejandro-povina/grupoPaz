import React from 'react';
import {Container} from "react-bootstrap";
import CardProductos from './CardProductos';
import bb from "../img/estibaBigBag.JPG";
import bolsa50 from "../img/estibas50.JPG";
import palet from "../img/paletizado.JPG"
import stretch from "../img/paletizadoStretch.JPG"
import sanGeronimo from "../img/AzucareraSanGeronimo.png"

const Productos = () => {
    return (
        <div className="fondo2 m-navbar">
            <Container>
                    <div className="d-flex justify-content-between align-items-center  px-3">
            <h3 className="display-6"><b>Nuestros Productos</b></h3>
            <img src={sanGeronimo} className="altura mt-3" alt="" />
                    </div>        
<CardProductos imag={bb}></CardProductos>
<CardProductos imag={bolsa50}></CardProductos>
<CardProductos imag={palet}></CardProductos>
<CardProductos imag={stretch}></CardProductos>
            </Container>
            
            
        </div>
    );
};

export default Productos;