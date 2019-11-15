import { combineReducers } from 'redux';
import auth from './authedUser';
import alert from './alert';
import restaurant from './restaurant';

export default combineReducers({
    auth,
    alert,
    restaurant
});