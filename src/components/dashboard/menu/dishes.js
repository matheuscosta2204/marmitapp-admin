import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { addDish, removeDish, updateDish, updateDishValue } from '../../../actions/menu';
import Dish from './dish';

const Dishes = ({ dishes, title, type, addDish, updateDish, updateDishValue, removeDish }) => {
    let color;
    switch(type) {
        case 'mainDishes':
            color = '#2393FA';
            break;
        case 'sideDishes':
            color = '#224B5E';
            break;
        case 'salads':
            color = '#14B386';
            break;
        case 'desserts':
            color = '#D09EA8';
            break;
        default:
            color = '#000';
    }
    
    return (
        <div className="dishes-container" style={{ borderLeftWidth: '3px', borderLeftStyle: 'solid', borderColor: color }}>
            <div className="dishes-header">
                <h4>{title}</h4>
                <Button variant="outline-success" onClick={() => addDish(dishes, type)}>Add Dish</Button>
            </div>
            {dishes.map((dish, index) => (
                <Dish 
                    dish={dish.description} 
                    dishValue={dish.value} 
                    key={index} 
                    onClick={() => removeDish(type, index)} 
                    onDishChange={(value) => updateDish({ type, index, value })} 
                    onDishValueChange={(value) => updateDishValue({ type, index, value })} />
            ))}
        </div>
    );
};

export default connect(null, { addDish, updateDish, updateDishValue, removeDish })(Dishes);