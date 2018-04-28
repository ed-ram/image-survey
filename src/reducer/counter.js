import {INCREMENT} from '../actions/types'



const initialState = {
    current: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return  { current: action.payload }
            break;
        default:
            return state
    }
}