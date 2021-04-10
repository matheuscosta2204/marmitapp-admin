import { LOAD_MEAL_OPTIONS, ADD_OPTION, REMOVE_OPTION, UPDATE_OPTION_TITLE, UPDATE_OPTION_DESCRIPTION, UPDATE_OPTION_PRICE, UPDATE_OPTION_DISH_QUANTITY, UPDATE_OPTION_DISH_DESCRIPTION } from '../actions/mealOptions';

const initialState = {
    _id: null,
    restaurant: null,
    options: [{ 
        title: "", 
        price: 0.00, 
        main: { quantity: 0},
        side: { quantity: 0},
        salads: { quantity: 0},
        deserts: { quantity: 0}
    }]
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
        case UPDATE_OPTION_DISH_QUANTITY:
            return {
                ...state,
                options: state.options.map((option, index) => {
                    if(index === payload.index) {
                        option[payload.type] = { ...option[payload.type], quantity: payload.quantity };
                    }
                    return option;
                })
            }
        case UPDATE_OPTION_DISH_DESCRIPTION:
            return {
                ...state,
                options: state.options.map((option, index) => {
                    if(index === payload.index) {
                        option[payload.type] = { ...option[payload.type], description: payload.description };
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