//action constants
const GET_LIST_REQUEST = 'GET_LIST_REQUEST';
const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
const GET_LIST_FAILURE = 'GET_LIST_FAILURE';

// initial state
const initialState = {
    fetching: false,
    imageArray: ['wango','dango'],
    error: null
}

// the reducer
export function reducer(state = initialState, action) {
    switch (action.type){
        case GET_LIST_REQUEST:
            return { ...state, fetching: true, error: null };
            break;
        case GET_LIST_SUCCESS:
            return { ...state, fetching: false, imageArray: action.list };
            break;
        case GET_LIST_FAILURE:
            return { ...state, fetching: false, imageArray: null, error: action.error };
            break;
        default:
            return state;
    }
}