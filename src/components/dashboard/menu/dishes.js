import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { addDish, removeDish } from '../../../actions/menu';
import Dish from './dish';

const Dishes = ({ dishes, title, type, addDish, removeDish }) => {
    let color;
    switch(type) {
        case 'mainDishes':
            color = '#0066ff';
            break;
        case 'sideDishes':
            color = '#cc9900';
            break;
        case 'salads':
            color = '#006600';
            break;
        case 'desserts':
            color = '#ff6666';
            break;
        default:
            color = '#000';
    }
    if(type === 'mainDishes') {
        color = '#0066ff';
    } else if(type) {

    }
    return (
        <div className="dishes-container" style={{ borderLeftWidth: '3px', borderLeftStyle: 'solid', borderColor: color }}>
            <div className="dishes-header">
                <h4>{title}</h4>
                <Button variant="success" onClick={() => addDish(type)}>Add Dish</Button>
            </div>
            {dishes.map((dish, index) => (
                <Dish value={dish} key={index} onClick={() => removeDish(type, index)} />
            ))}
        </div>
    );
};

export default connect(null, { addDish, removeDish })(Dishes);