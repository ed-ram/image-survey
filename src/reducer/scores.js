import * as types from '../actions/types'

// synchronous action creators

export const update_current_score = (val) => {
    console.log(val)
    return({
        type: types.UPDATE_SCORE, payload: val
    })
}

export const commit_score = (val) => (
    {
        type: types.COMMIT_SCORE, payload: val 
    }
)

const initState = {
    current_score: '',
    scores: [{uuid:'', score:''}]
}

export default (state = initState, action) => {
    switch(action.type){
    case types.POPULATE_SCORES:
        return {...state, scores: action.payload}
        break;
    case types.UPDATE_SCORE:
        return {...state, current_score: action.payload.score, 
            scores: state.scores.map(
                (item) => item.uuid===action.payload.uuid ? {...item, score:action.payload.score}
                                                          : item
            )}
        break;
    default:
        return state;
    }
}