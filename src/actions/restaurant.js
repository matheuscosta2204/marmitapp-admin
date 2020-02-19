import axios from 'axios';
import { setAlert } from './alert';

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'; 
export const SEARCH_FAIL = 'SEARCH_FAIL'; 
export const GET_CURRENT_RESTAURANT = 'GET_CURRENT_RESTAURANT'; 
export const RESTAURANT_CURRENT_ERROR = 'RESTAURANT_CURRENT_ERROR'; 
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAIL = 'UPDATE_FAIL';

const api = 'https://marmitapp-admin.herokuapp.com';

// SEARCH PARTNERS
export const searchPartners = (filter) => async dispatch => {
    try {
        const res = await axios.get(`${api}/api/restaurant/filter/${filter}`);

        dispatch({
            type: SEARCH_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: SEARCH_FAIL
        });
    }
}

export const getCurrentRestaurant = () => async dispatch => {
    try {
        const res = await axios.get(`${api}/api/restaurant/current`);

        let isComplete = false;

        if(res.data.logo !== "") {
            isComplete = true;
        }

        dispatch({
            type: GET_CURRENT_RESTAURANT,
            payload: { data: res.data, isComplete }
        });
    } catch (err) {
        dispatch({
            type: RESTAURANT_CURRENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

export const updateCurrentRestaurant = ({ logo, address, zipCode, number, phone, active, whatsapp }) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({ logo, address, zipCode: zipCode.replace(/[^a-z\d\s]+/gi, ""), number, whatsapp, phone: phone.replace(/[^a-z\d\s]+/gi, ""), active });

        const res = await axios.put(`${api}/api/restaurant/completeinfo`, body, config);

        dispatch({
            type: UPDATE_SUCCESS,
            payload: res.data
        });
        dispatch(setAlert("Account updated successfuly", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: UPDATE_FAIL
        });
    }
}

export const updatePassword = ({ password, newPassword }) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({ password, newPassword });

        const res = await axios.put(`${api}/api/restaurant/password`, body, config);

        dispatch({
            type: UPDATE_SUCCESS,
            payload: res.data
        });
        dispatch(setAlert("Password changed successfuly", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: UPDATE_FAIL
        });
    }
}