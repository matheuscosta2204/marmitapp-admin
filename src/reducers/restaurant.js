import { SEARCH_SUCCESS, SEARCH_FAIL, GET_CURRENT_RESTAURANT, RESTAURANT_CURRENT_ERROR } from '../actions/restaurant';

const initialState = {
    restaurants: [],
    loading: true,
    current: {},
    error: {}
}

export default function auth (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_CURRENT_RESTAURANT:
            return {
                ...state,
                current: payload,
                loading: false
            }
        case RESTAURANT_CURRENT_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
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