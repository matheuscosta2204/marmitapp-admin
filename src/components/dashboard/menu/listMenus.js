import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';

import { setTabKey } from '../../../actions/menu';
import Dishes from './dishes';
import './menus.scss';

const Menus = ({ menus, tabKey, setTabKey, tabChanges }) => {

    const changeTab = k => {
        if(tabChanges) {
            if (window.confirm('There are some changes in this tab, if you leave, you might be lose those changes!')) {
                setTabKey(k);
            }
        } else {
            setTabKey(k);
        }
    }

    return (
        <Tabs id="controlled-tab-example" activeKey={tabKey} onSelect={changeTab} className="menus mt-5">
            {menus.map(menu => (
                <Tab eventKey={menu.date} title={menu.date} key={menu.date}>
                    <Dishes dishes={menu.mainDishes} type="mainDishes" title="Main Dishes" />
                    <Dishes dishes={menu.sideDishes} type="sideDishes" title="Side Dishes" />
                    <Dishes dishes={menu.salads} type="salads" title="Salads" />
                    <Dishes dishes={menu.desserts} type="desserts" title="Desserts" />
                </Tab>
            ))}
        </Tabs>
    );
};

function mapStateToProps({ menu }) {
    return {
        tabChanges: menu.tabChanges,
        tabKey: menu.tabKey
    }
}

export default connect(mapStateToProps, { setTabKey })(Menus);