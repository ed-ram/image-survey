import * as types from '../actions/types'

// initial state
const initialState = {
    initialised: false,
    imageGroups: [],
    fetching: false,
    error: null
}

// the reducer
export default (state = initialState, action) => {
    switch (action.type){
        case types.GET_LIST_REQUEST:
            return { ...state, fetching: action.payload.fetching, error: action.payload.error, initialised: action.payload.initialised };
            break;
        case types.GET_LIST_SUCCESS:
            return { ...state, fetching: action.payload.fetching, imageGroups: action.payload.imageGroups    };
            break;
        case types.GET_LIST_FAILURE:
            return { ...state, fetching: false, imageArray: null, error: action.error };
            break;
        default:
            return state;
    }
}