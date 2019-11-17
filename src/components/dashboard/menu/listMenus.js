import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Dishes from './dishes';
import './menus.scss';

const Menus = ({ menus }) => {
    const [key, setKey] = useState(menus[0].date);

    return (
        <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)} className="menus mt-5">
            {menus.map(menu => (
                <Tab eventKey={menu.date} title={menu.date}>
                    <Dishes dishes={menu.mainDishes} type="mainDishes" title="Main Dishes" />
                    <Dishes dishes={menu.sideDishes} type="sideDishes" title="Side Dishes" />
                    <Dishes dishes={menu.salads} type="salads" title="Salads" />
                    <Dishes dishes={menu.desserts} type="desserts" title="Desserts" />
                </Tab>
            ))}
        </Tabs>
    );
};

export default Menus;