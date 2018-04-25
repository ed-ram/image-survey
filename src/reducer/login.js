//action constants
const CHECK_LOGIN = 'CHECK_LOGIN';
const LOGIN_CHECKED = 'LOGIN_CHECKED';
const LOGIN_FAILED = 'LOGIN_FAILED';

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