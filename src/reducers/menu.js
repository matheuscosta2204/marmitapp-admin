//import moment from 'moment';
import { SET_TAB_KEY, ADD_MENU, REMOVE_MENU, ADD_DISH, REMOVE_DISH } from '../actions/menu';

const initialState = {
    tabKey: "17/11/2019",
    menus: {
        "17/11/2019": {
            date: "17/11/2019",
            mainDishes: ["firstDish", "secondDish", "thirdDish"],
            sideDishes: ["firstDish", "secondDish", "thirdDish"],
            salads: ["firstSalad", "secondSalad", "thirdSalad"],
            desserts: ["firstDessert", "secondDessert", "thirdDessert"]
        },
        "16/11/2019": {
            date: "16/11/2019",
            mainDishes: ["firstDish", "secondDish", "thirdDish"],
            sideDishes: ["firstDish", "secondDish", "thirdDish"],
            salads: ["firstSalad", "secondSalad", "thirdSalad"],
            desserts: ["firstDessert", "secondDessert", "thirdDessert"]
        },
        "15/11/2019": {
            date: "15/11/2019",
            mainDishes: ["firstDish", "secondDish", "thirdDish"],
            sideDishes: ["firstDish", "secondDish", "thirdDish"],
            salads: ["firstSalad", "secondSalad", "thirdSalad"],
            desserts: ["firstDessert", "secondDessert", "thirdDessert"]
        }
    }
};

export default function menu(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_TAB_KEY:
            return {
                ...state,
                tabKey: payload.key
            }
        case ADD_MENU:
            return state;
        case REMOVE_MENU:
            return state;
        case ADD_DISH:
            return {
                ...state,
                menus: {
                    ...state.menus,
                    [state.tabKey]: {
                        ...state.menus[state.tabKey],
                        [payload.type]: [...state.menus[state.tabKey][payload.type], ""]
                    }
                }
            }
        case REMOVE_DISH:
            return {
                ...state,
                menus: {
                    ...state.menus,
                    [state.tabKey]: {
                        ...state.menus[state.tabKey],
                        [payload.type]: state.menus[state.tabKey][payload.type].filter((dish, index) => payload.index !== index)
                    }
                }
            }
        default:
            return state;
    }
};