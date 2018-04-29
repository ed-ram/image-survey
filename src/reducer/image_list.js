import * as types from '../actions/types'

// initial state
const initialState = {
    initialised: false,
    imageGroups: [{uuid:'21314', 
                   images:['0e0733db-924f-4aef-bb06-6588dd06620d.jpg',
                           '1c430a3d-58da-4288-87b4-577496bba46b.jpg',
                           '1d630521-9daf-419a-b7b5-508f2a9fc4d2.jpg',
                           ]},
                {uuid:'21314', images:['345423','2352','2354423']},{uuid:'21314', images:['345423','2352','2354423']}],
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