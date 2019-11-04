import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Toolbar = () => {
    return (
        <Navbar bg="transparent" variant="dark" expand="lg">
            <Navbar.Brand href="./"><img src="./FullLogo.png" alt="logo" height="70px" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="align-items-center">
                    <Nav.Link href="login"><Button variant="secondary">Login</Button></Nav.Link>
                    <Nav.Link href="register">Become a partner</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Toolbar;