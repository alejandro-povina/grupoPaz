import React from 'react';
import { Link } from 'react-router-dom';
const ItemBotones = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    return (
            <div >
            <Link
            onClick={() =>scrollToTop()}  
            to="/empresa" 
            className="me-1 mt-0 bot text-light ">
                Empresa
                </Link>
            <Link
            onClick={() =>scrollToTop()}  
            to="/contacto"  
            className="ms-1 bot text-light">
                Contacto
                </Link>
            </div> 
    );
};

export default ItemBotones;