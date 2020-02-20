import { setAlert } from './alert';
import axios from 'axios';

export const LOAD_MEAL_OPTIONS = 'LOAD_MEAL_OPTIONS';
export const UPDATE_OPTION_TITLE = 'UPDATE_OPTION_TITLE';
export const UPDATE_OPTION_DESCRIPTION = 'UPDATE_OPTION_DESCRIPTION';
export const UPDATE_OPTION_PRICE = 'UPDATE_OPTION_PRICE';
export const ADD_OPTION = 'ADD_OPTION';
export const REMOVE_OPTION = 'REMOVE_OPTION';

const api = 'https://marmitapp-admin.herokuapp.com';
//const api = 'http://localhost:5000';

export const loadMealOptions = () => async dispatch => {
    try {
        const res = await axios.get(`${api}/api/mealOptions`);
        if(Object.keys(res.data).length > 0) {
            dispatch({
                type: LOAD_MEAL_OPTIONS,
                payload: res.data
            });
        }
    } catch(err) {
        console.log(err);
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
    }
}

export const updateOptionTitle = (index, title) => dispatch => {
    dispatch({
        type: UPDATE_OPTION_TITLE,
        payload: { index, title }
    })
}

export const updateOptionDescription = (index, description) => dispatch => {
    dispatch({
        type: UPDATE_OPTION_DESCRIPTION,
        payload: { index, description }
    })
}

export const updateOptionPrice = (index, price) => dispatch => {
    dispatch({
        type: UPDATE_OPTION_PRICE,
        payload: { index, price }
    })
}

export const addOption = (options) => dispatch => {
    if(options.length >= 5) {
        dispatch(setAlert("maximum 5 options", 'danger'));
    } else {
        dispatch({
            type: ADD_OPTION
        });
    }
}

export const removeOption = (index) => dispatch => {
    dispatch({
        type: REMOVE_OPTION,
        payload: { index }
    });
}

export const saveOptions = (options) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({ ...options });

        console.log(body);

        if(options._id) {
            await axios.put(`${api}/api/mealOptions`, body, config);
        } else {
            await axios.post(`${api}/api/mealOptions`, body, config);
        }

        dispatch(setAlert("Menus saved successfuly", "success"));
    } catch (err){
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
    }
}