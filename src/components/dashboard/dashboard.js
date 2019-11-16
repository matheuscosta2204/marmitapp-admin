import React, { useState } from 'react';
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import Jimp from 'jimp/es';

import EmptySet from '../../media/svg/empty-set.svg';

import './dashboard.scss';

const Dashboard = () => {
    const { getRootProps, getInputProps } = useDropzone({ 
        accept: 'image/*', 
        multiple: false, 
        maxSize: 300000, 
        onDrop: (files) => getBase64Img(files[0])
    });

    const [dropzoneError, setDropzoneError] = useState(null);
    const [dropzoneLoading, setLropzoneLoading] = useState(false);
    const [formData, setFormData] = useState({
        logo: EmptySet
    });

    const { logo } = formData;
    
    function getBase64Img(file) {
        if(typeof file !== 'undefined') {
            setLropzoneLoading(true);
            const reader = new FileReader();
            reader.onload = async (event) => {
                const base64 = event.target.result.replace(`data:${file.type};base64,`, "");
                const buf = Buffer.from(base64, 'base64');
                const image = await Jimp.read(buf);
                await image.resize(150, 150);
                await image.quality(80);
                image.getBase64Async(Jimp.AUTO).then(res => {
                    setFormData({ ...formData, logo: res });
                    setLropzoneLoading(false);
                });
            };
            reader.readAsDataURL(file);
            setDropzoneError(null);
        } else {
            setDropzoneError("The logo needs to be an image and must be less than 300kb.");
        }
    };

    return (
        <Row>
            <Col md={{ span: 8, offset: 2 }}>
                <Form className="dashboard-account-form">
                    <h1>Accout</h1>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="formLogo" className="logo-img">
                            <img src={logo} alt="logo" />
                        </Form.Group>
                        <Form.Group as={Col} md="8" controlId="formLogoInput">
                            <div {...getRootProps({ className: 'logo-dropzone' })}>
                                <input {...getInputProps()} />
                                {dropzoneLoading && <Spinner animation="border" variant="dark" />}
                                {!dropzoneLoading && <h1>Drag your Logo here!</h1>}
                                {!dropzoneLoading && dropzoneError && (<p className="error">{dropzoneError}</p>)}
                            </div>
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
                                placeholder="CNPJ" 
                                pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})" />
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