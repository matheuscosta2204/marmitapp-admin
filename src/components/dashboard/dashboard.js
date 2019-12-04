import React, { useState, useEffect } from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';

import Account from './account';
import Menus from './menu/menus';

import './dashboard.scss';
import { getMenus } from '../../actions/menu';
import { setAlert } from '../../actions/alert';

const Dashboard = ({ isComplete, getMenus, setAlert }) => {
    const [key, setKey] = useState('account');

    useEffect(() => {
        getMenus()
    }, []);

    const changeTab = k => {
        if(!isComplete) {
            setAlert("Please, complete the form before leave this tab.", "danger");
        } else {
            setKey(k);
        }
    }

    return (
        <Row>
            <Col md={{ span: 8, offset: 2 }}>
                <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => changeTab(k)} className="dashboard">
                    <Tab eventKey="account" title="Account">
                        <Account />
                    </Tab>
                    <Tab eventKey="menus" title="Menus">
                        <Menus />
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    );
};

function mapStateToProps({ restaurant }) {
    return {
        isComplete: restaurant.isComplete
    }
}

export default connect(mapStateToProps, { getMenus, setAlert })(Dashboard);