import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import Jimp from 'jimp/es';
import { connect } from 'react-redux';

import { setAlert } from '../../actions/alert';
import { getCurrentRestaurant, updateCurrentRestaurant, updatePassword } from '../../actions/restaurant';
import EmptySet from '../../media/svg/empty-set.svg';

const Account = ({ loading, restaurant, getCurrentRestaurant, setAlert, updateCurrentRestaurant, updatePassword }) => {
    const { getRootProps, getInputProps } = useDropzone({ 
        accept: 'image/*', 
        multiple: false, 
        maxSize: 300000, 
        onDrop: (files) => getBase64Img(files[0])
    });

    const [dropzoneError, setDropzoneError] = useState(null);
    const [dropzoneLoading, setLropzoneLoading] = useState(false);    
    const [formData, setFormData] = useState({
        logo: EmptySet,
        name: '',
        cnpj: '',
        email: '',
        password: '',
        newPassword: '',
        zipCode: '',
        address: '',
        number: '',
        phone: '',
        active: true
    });

    useEffect(() => {
        getCurrentRestaurant();
        setFormData({
            logo: loading || !restaurant.logo ? EmptySet : restaurant.logo,
            name: loading || !restaurant.name ? '' : restaurant.name,
            cnpj: loading || !restaurant.cnpj ? '' : restaurant.cnpj,
            email: loading || !restaurant.email ? '' : restaurant.email,
            zipCode: loading || !restaurant.zipCode ? '' : restaurant.zipCode,
            address: loading || !restaurant.address ? '' : restaurant.address,
            number: loading || !restaurant.number ? '' : restaurant.number,
            phone: loading || !restaurant.phone ? '' : restaurant.phone,
            active: loading || !restaurant.active ? false : restaurant.active,
        });
    }, [loading]);

    const { logo, name, cnpj, email, password, newPassword, zipCode, address, number, phone, active } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onChangeCheckbox = e =>
        setFormData({ ...formData, [e.target.name]: !formData[e.target.name] });

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

    function checkForm() {
        let result = true;
        let messages = [];
        if(formData.logo === EmptySet) {
            messages.push("Insert the Logo");
            result = false;
        }

        return {
            result,
            messages
        };
    }

    const onChangePassword = async e => {
        e.preventDefault();
        if(formData.password === formData.newPassword) {
            setAlert("Please, type a diferent new password", "danger");
        } else {
            updatePassword(formData);
        }        
    }

    const onSubmit = async e => {
        e.preventDefault();
        const valid = checkForm();
        if(!valid.result) {
            valid.messages.forEach(msg => {
                setAlert(msg, "danger");
            });
        }
        updateCurrentRestaurant(formData);
    }

    return (
        <Form className="dashboard-box" onSubmit={onSubmit}>
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
                <Form.Group as={Col} md="4" controlId="formName">
                    <Form.Label>Restaurant's name</Form.Label>
                    <Form.Control 
                        plaintext 
                        readOnly
                        type="text" 
                        placeholder="Enter restaurant's name" 
                        name="name"
                        value={name}
                        onChange={e => onChange(e)}
                        />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="formCnpj">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control
                        plaintext 
                        readOnly 
                        type="text" 
                        placeholder="CNPJ" 
                        name="cnpj"
                        value={cnpj}
                        onChange={e => onChange(e)}
                        pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})" />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="formEmail">
                    <Form.Label>Restaurant's email</Form.Label>
                    <Form.Control 
                        plaintext 
                        readOnly 
                        type="email" 
                        placeholder="Enter email" 
                        name="email"
                        value={email}
                        onChange={e => onChange(e)} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter currently password" 
                        name="password"
                        autoComplete="off"
                        value={password || ''}
                        onChange={e => onChange(e)} />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="formNewPassword">
                    <Form.Label>New password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter new password" 
                        name="newPassword"
                        autoComplete="off"
                        value={newPassword || ''}
                        onChange={e => onChange(e)} />
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label>&nbsp;</Form.Label>
                    <Col md={{ span: 12, offset: 0 }}>
                        <Button type="button" onClick={onChangePassword}>Change password</Button>
                    </Col>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="3" controlId="formZipCode">
                    <Form.Label>Restaurant's zipcode</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter zipcode" 
                        name="zipCode"
                        value={zipCode}
                        onChange={e => onChange(e)} />
                </Form.Group>
                <Form.Group as={Col} md="7" controlId="formAddress">
                    <Form.Label>Restaurant's address</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter address" 
                        name="address"
                        value={address}
                        onChange={e => onChange(e)} />
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="formNumber">
                    <Form.Label>Street number</Form.Label>
                    <Form.Control 
                        type="number" 
                        name="number"
                        value={number}
                        onChange={e => onChange(e)} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter restaurant's phone" 
                        name="phone"
                        value={phone}
                        onChange={e => onChange(e)} />
                </Form.Group>
            </Form.Row>
            <Form.Group>
                <Form.Check 
                    custom
                    type="switch"
                    id={"custom-switch"}
                    label="Active"
                    name="active"
                    checked={active}
                    onChange={e => onChangeCheckbox(e)} 
                />
            </Form.Group>
            <Button type="submit" variant="success">Submit form</Button>
        </Form>
    )
};

function mapStateToProps({ restaurant }) {
    return {
        loading: restaurant.loading,
        restaurant: restaurant.current
    }
}

export default connect(mapStateToProps, { getCurrentRestaurant, setAlert, updateCurrentRestaurant, updatePassword })(Account);