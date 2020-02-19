import { combineReducers } from 'redux';
import auth from './authedUser';
import alert from './alert';
import restaurant from './restaurant';
import menu from './menu';
import mealOptions from './mealOptions';

export default combineReducers({
    auth,
    alert,
    restaurant,
    menu,
    mealOptions
});