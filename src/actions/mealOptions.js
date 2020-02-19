import { setAlert } from './alert';

export const LOAD_MEAL_OPTIONS = 'LOAD_MEAL_OPTIONS';
export const UPDATE_OPTION_TITLE = 'UPDATE_OPTION_TITLE';
export const UPDATE_OPTION_DESCRIPTION = 'UPDATE_OPTION_DESCRIPTION';
export const UPDATE_OPTION_PRICE = 'UPDATE_OPTION_PRICE';
export const ADD_OPTION = 'ADD_OPTION';
export const REMOVE_OPTION = 'REMOVE_OPTION';

export const loadMealOptions = () => dispatch => {
    
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

export const saveOptions = () => dispatch => {
    
}