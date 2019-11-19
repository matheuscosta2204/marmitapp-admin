import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import ListMenus from './listMenus';
import './menus.scss';

const Menus = ({ menus }) => {
    return (
        <div className="dashboard-box">
            <div className="buttons-menu-container">
                <Button variant="success">Add Menu</Button>
                <Button variant="danger">Remove Menu</Button>
            </div>
            <ListMenus menus={menus} />
        </div>
    )
};

function mapStateToProps({ menu }) {
    return {
        menus: Object.keys(menu.menus).map(key => {
            return menu.menus[key];
        })
    }
};

export default connect(mapStateToProps)(Menus);