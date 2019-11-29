import React, { useState, useEffect } from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';

import Account from './account';
import Menus from './menu/menus';

import './dashboard.scss';
import { getMenus } from '../../actions/menu';

const Dashboard = ({ getMenus }) => {
    const [key, setKey] = useState('account');

    useEffect(() => {
        getMenus()
    }, [])

    return (
        <Row>
            <Col md={{ span: 8, offset: 2 }}>
                <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)} className="dashboard">
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

export default connect(null, { getMenus })(Dashboard);