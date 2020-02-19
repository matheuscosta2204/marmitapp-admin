import { LOAD_MEAL_OPTIONS, ADD_OPTION, REMOVE_OPTION, UPDATE_OPTION_TITLE, UPDATE_OPTION_DESCRIPTION, UPDATE_OPTION_PRICE } from '../actions/mealOptions';

const initialState = [
    {
        title: "Small",
        description: "1 main dish, 2 side dishes, 1 salad",
        price: 10.5
    },
    {
        title: "Medium",
        description: "2 main dish, 2 side dishes, 1 salad",
        price: 12.5
    },
    {
        title: "Big",
        description: "2 main dish, 3 side dishes, 2 salad",
        price: 14.5
    },
]

export default function mealOptions(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOAD_MEAL_OPTIONS:
            return state;
        case UPDATE_OPTION_TITLE:
            return state.map((option, index) => {
                if(index === payload.index) {
                    option.title = payload.title;
                }
                return option;
            });
        case UPDATE_OPTION_DESCRIPTION:
            return state.map((option, index) => {
                if(index === payload.index) {
                    option.description = payload.description;
                }
                return option;
            });
        case UPDATE_OPTION_PRICE:
            return state.map((option, index) => {
                if(index === payload.index) {
                    option.price = payload.price;
                }
                return option;
            });
        case ADD_OPTION:
            return [...state, { title: "", description: "", price: 0.00 }];
        case REMOVE_OPTION:
            return state.filter((option, index) => index !== payload.index);
        default:
            return state;
    }
}