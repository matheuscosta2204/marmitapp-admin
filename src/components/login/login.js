import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { login } from '../../actions/authedUser';
import './login.scss';

const Login = (props) => {

    const [formData, setFormData] = useState({
        email: '',
        cnpj: '',
        name: '',
        password: '',
        password2: ''
    });

    const { email, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        props.login(email, password);
    }

    if(props.isAuthenticated) {
        return <Redirect to="dashboard" />
    }

    return (
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <Form className="login-form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            name="email" 
                            value={email} 
                            onChange={e => onChange(e)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Enter password" 
                            autoComplete="off"
                            name="password" 
                            value={password} 
                            onChange={e => onChange(e)}/>
                    </Form.Group>
                    
                    <Button variant="success" block type="button" onClick={onSubmit}>
                        Login
                    </Button>
                </Form>
            </Col>
        </Row>
    )
};

function mapStateToProps({ auth }) {
    return {
        isAuthenticated: auth.isAuthenticated
    };
}

export default connect(mapStateToProps, { login })(Login);