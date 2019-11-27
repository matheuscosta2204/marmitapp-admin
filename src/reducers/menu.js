import { SET_TAB_KEY, ADD_MENU, REMOVE_MENU, ADD_DISH, UPDATE_DISH,REMOVE_DISH } from '../actions/menu';
import moment from 'moment';

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

const newMenu = {
    date: moment().format('DD/MM/YYYY'),
        mainDishes: [""],
        sideDishes: [""],
        salads: [""],
        desserts: [""]
}

export default function menu(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_TAB_KEY:
            return {
                ...state,
                tabKey: payload.key
            }
        case ADD_MENU:
            return {
                ...state,
                tabKey: moment().format('DD/MM/YYYY'),
                menus: {
                    [moment().format('DD/MM/YYYY')]: newMenu,
                    ...state.menus
                }
            }
        case REMOVE_MENU:
            return {
                ...state,
                tabKey: Object.keys(payload.menus)[0],
                menus: payload.menus
            }
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
        case UPDATE_DISH:
            return {
                ...state,
                menus: {
                    ...state.menus,
                    [state.tabKey]: {
                        ...state.menus[state.tabKey],
                        [payload.type]: state.menus[state.tabKey][payload.type].map((dish, index) => {
                            if (payload.index === index) {
                                dish = payload.value;
                            }
                            return dish;
                        })
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