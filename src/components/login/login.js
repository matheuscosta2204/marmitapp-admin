import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './login.scss';
import Toolbar from '../../ui/toolbar/toolbar';
import { connect } from 'react-redux';

import { setAuthedUser } from '../../actions/authedUser';
import { login } from '../../services/restaurant';

const Login = (props) => {

    const [redirect, setRedirect] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState();
    const [enteredPassword, setEnteredPassword] = useState();

    const onSubmit = () => {        
        const body = { email: enteredEmail, password: enteredPassword };

        login(body).then(user => {
            setRedirect(true);
            props.dispatch(setAuthedUser(user));
        }).catch(err => {
            console.log("err: ", err);
        })
    }

    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to='/admin' />
        }
    }

    return (
        <Container className="login-container">
            {renderRedirect()}
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
};

function mapStateToProps({ user }) {
    return {
        user
    };
}

export default connect(mapStateToProps)(Login);