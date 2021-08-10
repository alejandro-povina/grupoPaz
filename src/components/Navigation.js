import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {React, useState} from 'react';
import {Link ,NavLink ,withRouter } from 'react-router-dom';



const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


    return (
<Navbar className="nav container-fluid py-2 w-100 px-3" variant="dark" expand="lg" expanded={expanded}>
  <Navbar.Brand 
  className="d-flex flex-column align-items-center" 
  as={Link} 
  to="/" 
  onClick={() => setTimeout(() => {
    scrollToTop(); 
    setExpanded(false)}, 150)}>
      Grupo Paz 
      <hr className="hrNav my-2" />
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" >
      <NavLink 
      onClick={() => setTimeout(() => {
        scrollToTop(); 
        setExpanded(false)}, 150)} 
      exact={true} 
      className="nav-link" 
      to="/">
        Inicio
        </NavLink>
      <NavLink 
       onClick={() => setTimeout(() => {
        scrollToTop(); 
        setExpanded(false)}, 150)}
      exact={true} 
      className="nav-link" 
      to="/empresa">
        La Empresa
        </NavLink>
      <NavLink 
      onClick={() => setTimeout(() => {
        scrollToTop(); 
        setExpanded(false)}, 150)}
      exact={true} 
      className="nav-link" 
      to="/contacto">
        Contacto
        </NavLink>
      <NavLink 
      onClick={() => setTimeout(() => {
        scrollToTop(); 
        setExpanded(false)}, 150)} 
      exact={true} 
      className="nav-link" 
      to="/productos">
        Productos
        </NavLink>
      <NavDropdown title="Servicios" className="" id="basic-nav-dropdown">
        <NavDropdown.Item 
        onClick={() => setTimeout(() => {
          scrollToTop(); 
          setExpanded(false)}, 150)} 
        className="text-dark  m-0"  
        as={Link} 
        to="/servicios/logistica">
          Logistica
          </NavDropdown.Item>
        <NavDropdown.Item 
        onClick={() => setTimeout(() => {
          scrollToTop(); 
          setExpanded(false)}, 150)} 
        className="text-dark  m-0"  
        as={Link} 
        to="/servicios/almacenaje">
          Almacenaje
          </NavDropdown.Item>
        <NavDropdown.Item 
        onClick={() => setTimeout(() => {
          scrollToTop(); 
          setExpanded(false)}, 150)} 
        className="text-dark  m-0"  
        as={Link} 
        to="/servicios/agro">
          Agro
          </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>  
  </Navbar>
);
};
export default withRouter(Navigation);