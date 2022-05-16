import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
const NavLog = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4207/4207247.png" height={'50px'}
                    />
                    CONTROL-ESCOLAR</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/Login">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1828/1828466.png" height={'30px'}
                            />
                             Login</Nav.Link>
                        <Nav.Link as={Link} to="/Register">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3596/3596029.png" height={'30px'}
                            />
                             Registro</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavLog