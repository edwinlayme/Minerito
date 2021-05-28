import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Main() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Menú de Opciones</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Clientes</Nav.Link>
       <Nav.Link href="#pricing">Proveedores</Nav.Link>
       <Nav.Link href="#pricing">Materiales</Nav.Link>
      <NavDropdown title="Administrar" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Nuevo Usuario</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Usuarios</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}
