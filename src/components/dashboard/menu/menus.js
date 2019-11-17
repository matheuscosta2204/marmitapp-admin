import React from 'react';
import moment from 'moment';
import { Button } from 'react-bootstrap';

import ListMenus from './listMenus';
import './menus.scss';

const menus = [
    {
        date: moment().format('DD/MM/YYYY'),
        mainDishes: ["firstDish", "secondDish", "thirdDish"],
        sideDishes: ["firstDish", "secondDish", "thirdDish"],
        salads: ["firstSalad", "secondSalad", "thirdSalad"],
        desserts: ["firstDessert", "secondDessert", "thirdDessert"]
    },
    {
        date: "16/11/2019",
        mainDishes: ["firstDish", "secondDish", "thirdDish"],
        sideDishes: ["firstDish", "secondDish", "thirdDish"],
        salads: ["firstSalad", "secondSalad", "thirdSalad"],
        desserts: ["firstDessert", "secondDessert", "thirdDessert"]
    },
    {
        date: "15/11/2019",
        mainDishes: ["firstDish", "secondDish", "thirdDish"],
        sideDishes: ["firstDish", "secondDish", "thirdDish"],
        salads: ["firstSalad", "secondSalad", "thirdSalad"],
        desserts: ["firstDessert", "secondDessert", "thirdDessert"]
    }
]

const Menus = () => {
    return (
        <div className="dashboard-box">
            <div className="add-menu-container">
                <Button variant="success">Add Menu</Button>
            </div>
            <ListMenus menus={menus} />
        </div>
    )
};

export default Menus;