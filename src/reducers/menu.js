import { GET_MENUS, SET_TAB_KEY, ADD_MENU, REMOVE_MENU, ADD_DISH, UPDATE_DISH, UPDATE_DISH_VALUE, REMOVE_DISH, CLEAR_MENUS, CLEAR_TAB_CHANGES } from '../actions/menu';
import moment from 'moment';

const newMenu = {
    date: moment().format('DD/MM/YYYY'),
    mainDishes: [{description: "", value: ""}],
    sideDishes: [{description: "", value: ""}],
    salads: [{description: "", value: ""}],
    desserts: [{description: "", value: ""}]
}

const initialState = {
    tabKey: moment().format('DD/MM/YYYY'),
    tabChanges: false,
    menus: {
        [moment().format('DD/MM/YYYY')]: {
            ...newMenu
        },
    }
};

export default function menu(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_MENUS:
            return {
                ...state,
                tabKey: payload.tabKey,
                menus: {
                    ...payload.menus,
                }
            }
        case SET_TAB_KEY:
            return {
                ...state,
                tabChanges: false,
                tabKey: payload.key
            }
        case CLEAR_TAB_CHANGES:
            return {
                ...state,
                tabChanges: false
            }
        case ADD_MENU:
            return {
                ...state,
                tabKey: moment(payload.date).format('DD/MM/YYYY'),
                menus: {
                    [moment(payload.date).format('DD/MM/YYYY')]: {
                        ...newMenu,
                        date: moment(payload.date).format('DD/MM/YYYY')
                    },
                    ...state.menus
                }
            }
        case REMOVE_MENU:
            return {
                ...state,
                tabKey: Object.keys(payload.menus)[0],
                menus: payload.menus
            }
        case CLEAR_MENUS:
            return initialState;
        case ADD_DISH:
            return {
                ...state,
                menus: {
                    ...state.menus,
                    [state.tabKey]: {
                        ...state.menus[state.tabKey],
                        [payload.type]: [...state.menus[state.tabKey][payload.type], {description: "", value: ""}]
                    }
                }
            }
        case UPDATE_DISH:
            return {
                ...state,
                tabChanges: true,
                menus: {
                    ...state.menus,
                    [state.tabKey]: {
                        ...state.menus[state.tabKey],
                        [payload.type]: state.menus[state.tabKey][payload.type].map((dish, index) => {
                            if (payload.index === index) {
                                dish.description = payload.value;
                            }
                            return dish;
                        })
                    }
                }
            }
        case UPDATE_DISH_VALUE:
            return {
                ...state,
                tabChanges: true,
                menus: {
                    ...state.menus,
                    [state.tabKey]: {
                        ...state.menus[state.tabKey],
                        [payload.type]: state.menus[state.tabKey][payload.type].map((dish, index) => {
                            if (payload.index === index) {
                                dish.value = payload.value;
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