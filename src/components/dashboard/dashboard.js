import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import './dashboard.scss';

const Dashboard = () => {
    return (
        <Row>
            <Col md={{ span: 8, offset: 2 }}>
                <Form className="dashboard-account-form">
                    <h1>Dashboard</h1>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="formLogo">
                            <Form.Label>Restaurant's Logo</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter restaurant's logo" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="formName">
                            <Form.Label>Restaurant's name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter restaurant's name" />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="formCnpj">
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="CNPJ" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="formEmail">
                            <Form.Label>Restaurant's email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter currently password" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="formNewPassword">
                            <Form.Label>New password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter new password" />
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label>&nbsp;</Form.Label>
                            <Col md={{ span: 12, offset: 1 }}>
                                <Button type="submit">Change password</Button>
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="3" controlId="formZipCode">
                            <Form.Label>Restaurant's zipcode</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter zipcode" />
                        </Form.Group>
                        <Form.Group as={Col} md="7" controlId="formAddress">
                            <Form.Label>Restaurant's address</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter address" />
                        </Form.Group>
                        <Form.Group as={Col} md="2" controlId="formNumber">
                            <Form.Label>Street number</Form.Label>
                            <Form.Control 
                                type="number" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control 
                                type="phone" 
                                placeholder="Enter restaurant's phone" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Check 
                            custom
                            type="switch"
                            id={"custom-switch"}
                            label="Active"
                        />
                    </Form.Group>
                    <Button type="submit" variant="success">Submit form</Button>
                </Form>
            </Col>
        </Row>
    )
};

export default Dashboard;