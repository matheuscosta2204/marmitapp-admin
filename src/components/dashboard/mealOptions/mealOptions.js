import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { loadMealOptions, addOption, removeOption, saveOptions } from '../../../actions/mealOptions';
import ListMealOptions from './listMealOptions';
import './mealOptions.scss';

const MealOptions = ({ mealOptions, loadMealOptions, addOption, removeOption, saveOptions }) => {

    useEffect(() => {
        loadMealOptions();
    }, []);

    return (
        <div className="dashboard-box">
            <div className="buttons-meal-container">
                <Button variant="outline-success" onClick={() => addOption(mealOptions.options)}>Add Option</Button>
            </div>
            <ListMealOptions onDelete={removeOption} options={mealOptions.options} />
            <div className="buttons-meal-container">
                <Button variant="success" onClick={() => saveOptions(mealOptions)}>Save</Button>
            </div>
        </div>
    )
};


function mapStateToProps({ mealOptions }) {
    return {
        mealOptions
    }
}

export default connect(mapStateToProps, { loadMealOptions, addOption, removeOption, saveOptions })(MealOptions);