import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';

import ListMenus from './listMenus';
import { addMenu, removeMenu } from '../../../actions/menu';
import './menus.scss';

const DatePickerButton = ({ value, onClick }) => (
    <Button variant="primary" onClick={onClick}>{value}</Button>
);

const Menus = ({ tabKey, menus, objectMenus, addMenu, removeMenu }) => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="dashboard-box">
            <div className="buttons-menu-container">
                <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={date}
                    onChange={date => setDate(date)}
                    customInput={<DatePickerButton />}
                />
                <Button variant="success" onClick={() => addMenu(objectMenus)}>Add Menu</Button>
                <Button variant="danger" onClick={() => removeMenu(objectMenus, tabKey)}>Remove Menu</Button>
            </div>
            <ListMenus menus={menus} />
        </div>
    )
};

function mapStateToProps({ menu }) {
    return {
        tabKey: menu.tabKey,
        menus: Object.keys(menu.menus).map(key => {
            return menu.menus[key];
        }),
        objectMenus: menu.menus
    }
};

export default connect(mapStateToProps, { addMenu, removeMenu })(Menus);