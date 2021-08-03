import React from 'react';

const CardProductos = (props) => {
    return (
        <div className="tarjetas1 bg row w-100 my-3 mx-auto">
            <div className="col-sm-12 col-md-4 col-lg-4 m-0 p-0">
        <img src={props.imag} alt="" className="w-100 fotoProd" />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-sm-content-start justify-md-content-center align-items-center">
        <p>Big bag de azucar tipo A,  en envase de 1250 kg.</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-sm-content-end justify-md-content-center align-items-center">
        <ul>
            <li>Bolsa polipropileno</li>
            <li>Bolsa papel craft</li>
            <li>Bolsa kajsdljas</li>
        </ul>
            </div>
        </div>
)
};

export default CardProductos;