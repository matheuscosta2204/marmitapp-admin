import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT'; 

const api = 'https://marmitapp-admin.herokuapp.com';

// LOAD RESTAURANT
export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get(`${api}/api/auth/restaurants`);

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}

// REGISTER RESTAURANT
export const register = ({ email, cnpj, name, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, cnpj, name, password });

    try{
        const res = await axios.post(`${api}/api/restaurant`, body, config);

         dispatch({
             type: REGISTER_SUCCESS,
             payload: res.data
         });

         dispatch(loadUser());

    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }
}

// LOGIN RESTAURANT
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try{
        const res = await axios.post(`${api}/api/auth/restaurants`, body, config);

         dispatch({
             type: LOGIN_SUCCESS,
             payload: res.data
         });

         dispatch(loadUser());

    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
}

//LOGOUT / Clear Profile
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
}
