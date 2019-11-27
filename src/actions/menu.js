import { setAlert } from './alert';
import moment from 'moment';

export const ADD_MENU = 'ADD_MENU';
export const REMOVE_MENU = 'REMOVE_MENU';
export const ADD_DISH = 'ADD_DISH';
export const UPDATE_DISH = 'UPDATE_DISH';
export const REMOVE_DISH = 'REMOVE_DISH';
export const SET_TAB_KEY = 'SET_TAB_KEY';

export const setTabKey = key => dispatch => {
    dispatch({
        type: SET_TAB_KEY,
        payload: { key }
    });
}

export const addMenu = (menus) => dispatch => {
    if(Object.keys(menus).length >= 3) {
        dispatch(setAlert("Max menus added, please, remove to insert a new one.", "danger"));
    } else if(Object.keys(menus).includes(moment().format('DD/MM/YYYY'))) {
        dispatch(setAlert("There already is a menu for this date", "danger"));
    } 
    else {
        dispatch({
            type: ADD_MENU
        });
        dispatch(setAlert("Menu added successfuly", "success"));
    }
}

export const removeMenu = (menus, tabKey) => dispatch => {
    if(Object.keys(menus).length <= 0) {
        dispatch(setAlert("There isn't any menu to be deleted", "danger"));
    } else {
        // remove selected menu
        delete menus[tabKey];
        dispatch({
            type: REMOVE_MENU,
            payload: { menus }
        });
        dispatch(setAlert("Menu removed successfuly", "success"));
    }
}

export const addDish = type => dispatch => {
    dispatch({
        type: ADD_DISH,
        payload: { type }
    })
}

export const updateDish = ({ type, index, value }) => dispatch => {
    dispatch({ 
        type: UPDATE_DISH,
        payload: { type, index, value }
    })
}

export const removeDish = (type, index) => dispatch => {
    dispatch({
        type: REMOVE_DISH,
        payload: { type, index }
    })
}