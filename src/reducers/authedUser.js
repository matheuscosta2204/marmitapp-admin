import { SET_AUTHED_USER } from '../actions/authedUser';

const initialState = {
    token: localStorage.getItem('token'),
    id: null,
    name: null,
    cnpj: null,
    email: null,
    logo: null, //initialize with empty picture
    number: null,
    phone: null,
    zipCode: null
}

export default function user (state = initialState, action) {
    switch(action.type) {
        case SET_AUTHED_USER :
            return {
                ...state,
                token: action.user.token,
                id: action.user._id,
                name: action.user.name,
                cnpj: action.user.cnpj,
                email: action.user.email,
                logo: action.user.logo,
                number: action.user.number,
                phone: action.user.phone,
                zipCode: action.user.zipCode
            }
        default:
            return state;
    }
}