import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import grupoPaz from "../img/grupopaz.png"


const Navigation = () => {
    return (
<Navbar className="nav container-fluid py-2 w-100 px-3" variant="dark" expand="lg">
  <Navbar.Brand className="d-flex flex-column align-items-center" href="/">Grupo Paz <hr className="hrNav my-2" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Inicio</Nav.Link>
      <Nav.Link href="/empresa">La Empresa</Nav.Link>
      <Nav.Link href="/contacto">Contacto</Nav.Link>
      <Nav.Link href="/productos">Productos</Nav.Link>
      <NavDropdown title="Servicios" className="" id="basic-nav-dropdown">
        <NavDropdown.Item className="text-dark m-0"  href="/servicios/logistica">Logistica</NavDropdown.Item>
        <NavDropdown.Item className="text-dark m-0"  href="/servicios/almacenaje">Almacenaje</NavDropdown.Item>
        <NavDropdown.Item className="text-dark m-0"  href="/servicios/agro">Agro</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>  
  </Navbar>
);
};
export default withRouter(Navigation);