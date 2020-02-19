import React from 'react';
import MealOption from './mealOption';

const ListMealOptions = ({ options, onDelete }) => {
    return (
        <div>
            {options.map((option, index) => (
                <MealOption 
                    option={option} 
                    onDelete={() => onDelete(index)} 
                    index={index} />
            ))}
        </div>
    )
};

export default ListMealOptions;