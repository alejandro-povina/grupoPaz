import React from 'react';
import grupoPaz from "../img/grupopaz.png"
import {Button} from "react-bootstrap"

const ItemLogo = (props) => {
    return (
        <div className="itemLogo">
            <div className="d-flex justify-content-center">
            <img src={props.logo} alt="" className="mb-2 alturaLogo" />
            </div>
        </div>
    );
};

export default ItemLogo;