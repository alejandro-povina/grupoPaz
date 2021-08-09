import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link ,NavLink ,withRouter } from 'react-router-dom';



const Navigation = () => {
    return (
<Navbar className="nav container-fluid py-2 w-100 px-3" variant="dark" expand="lg">
  <Navbar.Brand className="d-flex flex-column align-items-center" as={Link} to="/">Grupo Paz <hr className="hrNav my-2" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink exact={true} className="nav-link" to="/">Inicio</NavLink>
      <NavLink exact={true} className="nav-link" to="/empresa">La Empresa</NavLink>
      <NavLink exact={true} className="nav-link" to="/contacto">Contacto</NavLink>
      <NavLink exact={true} className="nav-link" to="/productos">Productos</NavLink>
      <NavDropdown title="Servicios" className="" id="basic-nav-dropdown">
        <NavDropdown.Item className="text-dark  m-0"  as={Link} to="/servicios/logistica">Logistica</NavDropdown.Item>
        <NavDropdown.Item className="text-dark  m-0"  as={Link} to="/servicios/almacenaje">Almacenaje</NavDropdown.Item>
        <NavDropdown.Item className="text-dark  m-0"  as={Link} to="/servicios/agro">Agro</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>  
  </Navbar>
);
};
export default withRouter(Navigation);