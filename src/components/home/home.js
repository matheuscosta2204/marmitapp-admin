import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './home.scss';
import Toolbar from '../../ui/toolbar/toolbar';
import GooglePlayLogo from '../../media/svg/google-play.svg';
import AppStoreLogo from '../../media/svg/app-store.svg';

const Home = () => {
    return (
        <Container className="home-container">
            <Toolbar />
            <Row className="flex-column align-items-center home-content">
                <h1>Find your menu today!</h1>
                <Link to="/partners" className="home-partners-buttom">
                    <FontAwesomeIcon icon={faSearch} size="lg" />
                    <h5>Our partners</h5>
                </Link>
            </Row>
            <Row className="home-store-content">
                <img src={GooglePlayLogo} alt="google play" width="50" />
                <img src={AppStoreLogo} alt="app store" width="50" />
            </Row>
        </Container>
    )
}

export default Home;