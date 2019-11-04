import React from 'react';
import { Container, Row } from 'react-bootstrap';

import './home.scss';
import Toolbar from '../../ui/toolbar/toolbar';

const Home = () => {
    return (
        <Container className="home-container">
            <Toolbar />
            <Row className="justify-content-center pt-8 home-title">
                Partners
            </Row>
        </Container>
    )
}

export default Home;