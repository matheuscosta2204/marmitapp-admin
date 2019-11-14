import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { setAlert } from '../../actions/alert';
import { register } from '../../actions/authedUser';

import './register.scss';

const Register = (props) => {

    const [formData, setFormData] = useState({
        email: '',
        cnpj: '',
        name: '',
        password: '',
        password2: ''
    });

    const { email, cnpj, name, password, password2 } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            props.setAlert('Passwords do not match', 'danger');
        } else {
            props.register({ email, cnpj, name, password });
        }
    }

    if(props.isAuthenticated) {
        return <Redirect to="dashboard" />
    }

    return (
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <Form className="register-form" onSubmit={e => onSubmit(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={e => onChange(e)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicCNPJ">
                        <Form.Label>CNPJ</Form.Label>
                        <Form.Control type="text" placeholder="Enter CNPJ" name="cnpj" value={cnpj} pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})" onChange={e => onChange(e)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Restaurant's name</Form.Label>
                        <Form.Control type="text" placeholder="Enter restaurant's email" name="name" value={name} onChange={e => onChange(e)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" name="password2" value={password2} onChange={e => onChange(e)} />
                    </Form.Group>
                    
                    <Button variant="success" block type="submit">
                        Register
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

function mapStateToProps({ auth }) {
    return {
        isAuthenticated: auth.isAuthenticated
    };
}

export default connect(mapStateToProps, { setAlert, register })(Register);