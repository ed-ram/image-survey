import {CHECK_LOGIN, LOGIN_CHECKED} from '../actions/types'


// initial state
const initialState = {
    loggedIn: false,
    token: null,
    id_token: null,
    checkingLogin: false
}

// the reducer
export function loginReducer(state = initialState, action) {
    switch (action.type){
        case CHECK_LOGIN:
            return { ...state, checkingLogin: true };
            break;
        case LOGIN_CHECKED:
            return { ...state,  loggedIn: action.response};
            break;
        default:
            return state;
    }
}