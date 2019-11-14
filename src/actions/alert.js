import uuid from 'uuid';

export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export const setAlert = (msg, alertType) => dispatch => {
    const id = uuid.v4();

    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    })

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
}