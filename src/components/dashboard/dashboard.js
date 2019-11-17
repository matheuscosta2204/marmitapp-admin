import React, { useState } from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';

import Account from './account';
import Menus from './menu/menus';

import './dashboard.scss';

const Dashboard = () => {
    const [key, setKey] = useState('menus');

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

export default Dashboard;