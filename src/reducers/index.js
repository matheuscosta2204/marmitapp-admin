import { combineReducers } from 'redux';
import auth from './authedUser';
import alert from './alert';

export default combineReducers({
    auth,
    alert
});