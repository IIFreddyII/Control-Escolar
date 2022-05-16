import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/homePage">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4207/4207247.png" height={'50px'}
                    />
                    CONTROL-ESCOLAR</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                    </Nav>
                    <h4>Admin</h4>
                    <Nav>
                        
                        <Nav.Link as={Link} to="/Login">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1828/1828466.png" height={'30px'}
                            />
                            Cerrar Session</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation