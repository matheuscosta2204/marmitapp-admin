import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';

import ListMenus from './listMenus';
import { addMenu, removeMenu, saveMenus } from '../../../actions/menu';
import './menus.scss';

const DatePickerButton = ({ value, onClick }) => {
    return (
        <Button variant="primary" onClick={onClick}>{value}</Button>
    );
};

const Menus = ({ tabKey, menus, objectMenus, addMenu, removeMenu, saveMenus }) => {
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
                <Button variant="success" onClick={() => addMenu(objectMenus, date)}>Add Menu</Button>
                <Button variant="danger" onClick={() => removeMenu(objectMenus, tabKey)}>Remove Menu</Button>
            </div>
            <ListMenus menus={menus} />
            <div className="buttons-menu-container">
                <Button variant="success" onClick={() => saveMenus(objectMenus, tabKey)}>Save</Button>
            </div>
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

export default connect(mapStateToProps, { addMenu, removeMenu, saveMenus })(Menus);