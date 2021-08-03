import React from 'react';
import {Nav} from "react-bootstrap";
import { withRouter } from 'react-router';

const NavProdServ = () => {
    return (
        <Nav className="m-navbar w-100"
>
  <Nav.Item>
    <Nav.Link className="links" href="/productosyservicios/productos">Productos</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="links" href="/productosyservicios/logistica">Logistica</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="links" href="/productosyservicios/almacenaje">Almacenaje</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link className="links" href="/productosyservicios/agro">Agro</Nav.Link>
  </Nav.Item>
</Nav>
    );
};

export default NavProdServ;