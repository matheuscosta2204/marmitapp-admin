import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import QRCode from 'qrcode.react';

import './home.scss';
import GooglePlayLogo from '../../media/svg/google-play.svg';
import AppStoreLogo from '../../media/svg/app-store.svg';

const Home = () => {
    return (
        <>
            <Row className="flex-column align-items-center home-content">
                <h1>Find your menu today!</h1>
                <Link to="/partners" className="home-partners-buttom">
                    <FontAwesomeIcon icon={faSearch} size="lg" />
                    <h5>Our partners</h5>
                </Link>
            </Row>
            <Row className="home-store-content">
                <div className="home-store-columns">
                <a href="googlePlay"><img src={GooglePlayLogo} alt="google play" width="70" /></a>
                    <QRCode value="googlePlay" size={90} includeMargin renderAs="svg" />
                </div>
                <div className="home-store-columns">
                    <a href="appStore"><img src={AppStoreLogo} alt="app store" width="70" /></a>
                    <QRCode value="appStore" size={90} includeMargin renderAs="svg" />
                </div>
            </Row>
        </>
    )
}

export default Home;