import axios from 'axios';

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'; 
export const SEARCH_FAIL = 'SEARCH_FAIL'; 

const api = 'http://localhost:5000'

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