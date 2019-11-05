import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './register.scss';
import Toolbar from '../../ui/toolbar/toolbar';

const Register = () => {
    return (
        <Container className="register-container">
            <Toolbar />
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form className="register-form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicCNPJ">
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control type="text" placeholder="Enter CNPJ" pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Restaurant's name</Form.Label>
                            <Form.Control type="text" placeholder="Enter restaurant's name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicAddress">
                            <Form.Label>Restaurant's address</Form.Label>
                            <Form.Control type="text" placeholder="Enter restaurant's address" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button variant="success" block type="submit">
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;