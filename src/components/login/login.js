import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './login.scss';
import Toolbar from '../../ui/toolbar/toolbar';

const Login = () => {
    return (
        <Container className="login-container">
            <Toolbar />
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form className="login-form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button variant="success" block type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;