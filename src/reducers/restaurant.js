import { SEARCH_SUCCESS, SEARCH_FAIL, GET_CURRENT_RESTAURANT, RESTAURANT_CURRENT_ERROR, UPDATE_SUCCESS } from '../actions/restaurant';

const initialState = {
    restaurants: [],
    loading: true,
    current: {},
    error: {},
    isComplete: false
}

export default function auth (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_CURRENT_RESTAURANT:
            return {
                ...state,
                current: payload.data,
                isComplete: payload.isComplete,
                loading: false
            }
        case RESTAURANT_CURRENT_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                isComplete: true,
                current: {
                    ...payload
                }
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: payload
            }
        case SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                restaurants: []
            }
        default:
            return state;
    }
}