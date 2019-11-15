import { SEARCH_SUCCESS, SEARCH_FAIL } from '../actions/restaurant';

const initialState = {
    restaurants: []
}

export default function auth (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case SEARCH_SUCCESS:
            return {
                ...state,
                restaurants: payload
            }
        case SEARCH_FAIL:
            return {
                ...state,
                restaurants: []
            }
        default:
            return state;
    }
}