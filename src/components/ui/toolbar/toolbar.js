import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { logout } from '../../../actions/authedUser';
import './toolbar.scss';

const Toolbar = (props) => {
    const authLinks = (
        <Nav className="align-items-center">
            <Nav.Link href="#" onClick={props.logout} ><Button variant="secondary">Logout</Button></Nav.Link>
        </Nav>
    );

    const guestLinks = (
        <Nav className="align-items-center">
            <Nav.Link href="login"><Button variant="secondary">Login</Button></Nav.Link>
            <Nav.Link href="register">Become a partner</Nav.Link>
        </Nav>
    );

    return (
        <Navbar bg="transparent" variant="dark" expand="lg">
            <Navbar.Brand href="./"><img src="./FullLogo.png" alt="logo" className="nav-bar-logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                {!props.auth.loading && (props.auth.isAuthenticated ? authLinks : guestLinks) }
            </Navbar.Collapse>
        </Navbar>
    );
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps, { logout })(Toolbar);