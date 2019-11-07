import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './login.scss';
import Toolbar from '../../ui/toolbar/toolbar';

import { login } from '../../services/restaurant';

const Login = () => {

    const [enteredEmail, setEnteredEmail] = useState();
    const [enteredPassword, setEnteredPassword] = useState();

    const onSubmit = () => {        
        const body = { email: enteredEmail, password: enteredPassword };

        console.log("form", body);

        login(body).then(res => {
            console.log("res: ", res);
        }).catch(err => {
            console.log("err: ", err);
        })
    }

    return (
        <Container className="login-container">
            <Toolbar />
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form className="login-form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={enteredEmail} onChange={event => setEnteredEmail(event.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={enteredPassword} onChange={event => setEnteredPassword(event.target.value)}/>
                        </Form.Group>
                        
                        <Button variant="success" block type="button" onClick={onSubmit}>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;