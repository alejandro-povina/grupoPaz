import React from 'react';
import { Link } from 'react-router-dom';
const ItemBotones = () => {
    return (
            <div >
            <Link to="/empresa" className="me-1 mt-0 bot text-light ">Empresa</Link>
            <Link to="/contacto"  className="ms-1 bot text-light">Contacto</Link>
            </div> 
    );
};

export default ItemBotones;