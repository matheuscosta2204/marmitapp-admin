import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { addOption, removeOption, saveOptions } from '../../../actions/mealOptions';
import ListMealOptions from './listMealOptions';
import './mealOptions.scss';

const MealOptions = ({ options, addOption, removeOption, saveOptions }) => {
    return (
        <div className="dashboard-box">
            <div className="buttons-meal-container">
                <Button variant="outline-success" onClick={() => addOption(options)}>Add Option</Button>
            </div>
            <ListMealOptions onDelete={removeOption} options={options} />
            <div className="buttons-meal-container">
                <Button variant="success" onClick={saveOptions}>Save</Button>
            </div>
        </div>
    )
};


function mapStateToProps({ mealOptions }) {
    return {
        options: mealOptions
    }
}

export default connect(mapStateToProps, { addOption, removeOption, saveOptions })(MealOptions);