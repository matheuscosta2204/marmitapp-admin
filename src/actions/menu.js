export const ADD_MENU = 'ADD_MENU';
export const REMOVE_MENU = 'REMOVE_MENU';
export const ADD_DISH = 'ADD_DISH';
export const REMOVE_DISH = 'REMOVE_DISH';
export const SET_TAB_KEY = 'SET_TAB_KEY';

export const setTabKey = key => dispatch => {
    dispatch({
        type: SET_TAB_KEY,
        payload: { key }
    });
}

export const addDish = type => dispatch => {
    dispatch({
        type: ADD_DISH,
        payload: { type }
    })
}

export const removeDish = (type, index) => dispatch => {
    console.log(type, index);
    dispatch({
        type: REMOVE_DISH,
        payload: { type, index }
    })
}