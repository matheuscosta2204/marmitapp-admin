import React from 'react';

const Dishes = ({ dishes, title, type }) => {
    let color;
    switch(type) {
        case 'mainDishes':
            color = '#0066ff';
            break;
        case 'sideDishes':
            color = '#006600';
            break;
        case 'salads':
            color = '#ff6666';
            break;
        case 'desserts':
            color = '#cc9900';
            break;
        default:
            color = '#000';
    }
    if(type === 'mainDishes') {
        color = '#0066ff';
    } else if(type) {

    }
    return (
        <div className="dishes-container" style={{ borderWidth: '1px', borderStyle: 'solid', borderRadius: '8px', borderColor: color }}>
            <h4>{title}</h4>
            {dishes.map(dish => (
                <div>
                    {dish}
                </div>
            ))}
        </div>
    );
};

export default Dishes;