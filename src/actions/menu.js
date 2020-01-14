import { setAlert } from './alert';
import axios from 'axios';
import moment from 'moment';

export const GET_MENUS = 'GET_MENUS';
export const ADD_MENU = 'ADD_MENU';
export const REMOVE_MENU = 'REMOVE_MENU';
export const ADD_DISH = 'ADD_DISH';
export const UPDATE_DISH = 'UPDATE_DISH';
export const REMOVE_DISH = 'REMOVE_DISH';
export const SET_TAB_KEY = 'SET_TAB_KEY';
export const SAVE_FAIL = 'SAVE_FAIL';
export const CLEAR_MENUS = 'CLEAR_MENUS';
export const CLEAR_TAB_CHANGES = 'CLEAR_TAB_CHANGES';

const api = 'https://marmitapp-admin.herokuapp.com';

export const getMenus = () => async dispatch => {
    try {
        const res = await axios.get(`${api}/api/menu/restaurant`);
        let menus = {};
        res.data.forEach(menu => {
            let date = moment(menu.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
            menus = {
                ...menus,
                [date]: {
                    ...menu,
                    date
                }
            }
        });
        if(res.data.length > 0) {
            dispatch({
                type: GET_MENUS,
                payload: { 
                    tabKey: moment(res.data[0].date, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                    menus
                }
            });
        }
    } catch(err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
    }
}

export const setTabKey = key => dispatch => {
    dispatch({
        type: SET_TAB_KEY,
        payload: { key }
    });
}

export const addMenu = (menus, date) => dispatch => {
    if(Object.keys(menus).length >= 3) {
        dispatch(setAlert("Max menus added, please, remove to insert a new one.", "danger"));
    } else if(Object.keys(menus).includes(moment(date).format('DD/MM/YYYY'))) {
        dispatch(setAlert("There already is a menu for this date", "danger"));
    } 
    else {
        dispatch({
            type: ADD_MENU,
            payload: { date }
        });
        dispatch(setAlert("Menu added successfuly", "success"));
    }
}

export const removeMenu = (menus, tabKey) => async dispatch => {
    try {
        if(Object.keys(menus).length <= 0) {
            dispatch(setAlert("There isn't any menu to be deleted", "danger"));
        } else {
            const date = moment(menus[tabKey].date, 'DD/MM/YYYY').format('YYYY-MM-DD');
            const res = await axios.delete(`${api}/api/menu/${date}`);
            
            // remove selected menu
            delete menus[tabKey];
            if(Object.keys(menus).length <= 0) {
                dispatch({
                    type: CLEAR_MENUS
                });
            } else {
                dispatch({
                    type: REMOVE_MENU,
                    payload: { menus }
                });
            }
            
            dispatch(setAlert(res.data.msg, "success"));
        }
    } catch(err) {
        console.log(err);
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
    }
}

export const saveMenus = (menus, tabKey) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({ ...menus[tabKey] });

        await axios.post(`${api}/api/menu`, body, config);

        dispatch({
            type: CLEAR_TAB_CHANGES
        })
        dispatch(setAlert("Menus saved successfuly", "success"));
    } catch (err){
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
    }
}

export const addDish = (dishes, type) => dispatch => {
    let max = 3;
    if(type === 'sideDishes') {
        max = 5;
    }
    if(dishes.length >= max) {
        dispatch(setAlert(`Wasn't possible to insert dish, ${max} is the maximum.`, "danger"));
    } else {
        dispatch({
            type: ADD_DISH,
            payload: { type }
        })
    }
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