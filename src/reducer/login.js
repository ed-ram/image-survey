import * as types from '../actions/types'


// initial state
const initialState = {
    loggedIn: false,
    access_token: null,
    id_token: null,
    checkingLogin: false
}

// the reducer
export function loginReducer(state = initialState, action) {
    switch (action.type){
        case types.CHECK_LOGIN:
            return { ...state, checkingLogin: true };
            break;
        case types.LOGIN_CHECKED:
            return { ...state,  loggedIn: action.response};
            break;
        default:
            return state;
    }
}