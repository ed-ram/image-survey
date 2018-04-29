import {INCREMENT} from '../actions/types'

//action creator to get 


const initialState = {
    current: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return  { current: state.current + 1 }
            break;
        default:
            return state
    }
}