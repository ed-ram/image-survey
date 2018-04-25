//action constants
const GET_LIST_REQUEST = 'GET_LIST_REQUEST';
const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
const GET_LIST_FAILURE = 'GET_LIST_FAILURE';

// initial state
const initialState = {
    imageGroups: [],
    fetching: false,
    error: null
}

// the reducer
export function imageListReducer(state = initialState, action) {
    switch (action.type){
        case GET_LIST_REQUEST:
            return { ...state, fetching: true, error: null };
            break;
        case GET_LIST_SUCCESS:
            return { ...state, fetching: false, imageGroups: action.imageGroups };
            break;
        case GET_LIST_FAILURE:
            return { ...state, fetching: false, imageArray: null, error: action.error };
            break;
        default:
            return state;
    }
}