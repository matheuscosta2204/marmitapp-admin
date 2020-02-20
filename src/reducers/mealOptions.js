import { LOAD_MEAL_OPTIONS, ADD_OPTION, REMOVE_OPTION, UPDATE_OPTION_TITLE, UPDATE_OPTION_DESCRIPTION, UPDATE_OPTION_PRICE } from '../actions/mealOptions';

const initialState = {
    _id: null,
    restaurant: null,
    options: [{ title: "", description: "", price: 0.00 }]
}

export default function mealOptions(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOAD_MEAL_OPTIONS:
            return {
                ...state,
                _id: payload._id,
                restaurant: payload.restaurant,
                options: payload.options
            }
        case UPDATE_OPTION_TITLE:
            return {
                ...state,
                options: state.options.map((option, index) => {
                    if(index === payload.index) {
                        option.title = payload.title;
                    }
                    return option;
                })
            }
        case UPDATE_OPTION_DESCRIPTION:
            return {
                ...state,
                options: state.options.map((option, index) => {
                    if(index === payload.index) {
                        option.description = payload.description;
                    }
                    return option;
                })
            }
        case UPDATE_OPTION_PRICE:
            return {
                ...state,
                options: state.options.map((option, index) => {
                    if(index === payload.index) {
                        option.price = payload.price;
                    }
                    return option;
                })
            }
        case ADD_OPTION:
            return {
                ...state,
                options: [...state.options, { title: "", description: "", price: 0.00 }]
            }
        case REMOVE_OPTION:
            return {
                ...state,
                options: state.options.filter((option, index) => index !== payload.index)
            }
        default:
            return state;
    }
}