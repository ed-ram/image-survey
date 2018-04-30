import {INCREMENT, DECREMENT} from '../actions/types'

//action creator to get 
export const increment = () => (
    {type: INCREMENT}
)

export const decrement = () => (
    {type: DECREMENT}
)

const initialState = {
    current: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return  { current: state.current + 1 }
            break;
        case DECREMENT:
            return {current: state.current - 1}
        default:
            return state
    }
}