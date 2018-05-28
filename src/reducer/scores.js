import * as types from '../actions/types'

//action creators

export const update_current_score = (val) => {
    /*console.log(val)*/
    return({
        type: types.UPDATE_SCORE, payload: val
    })
};

export const commit_score = (val) => (
    {
        type: types.COMMIT_SCORE, payload: val 
    }
);

const initState = {
    years_experience: 0,
    current_score: '',
    scores: [{uuid:'', score:''}],
    scores_submitted: false
};

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
    case types.POST_SCORES_SUCCESS:
        return {...state, scores_submitted: action.payload.scores_submitted}
        break;
    case types.INC_YEARS_EXP:
        return {...state, years_experience: state.years_experience + 1};
        break;
    case types.DEC_YEARS_EXP:
        return {...state, years_experience: state.years_experience > 0 ? state.years_experience - 1 : 0};
        break;
    default:
        return state;
    }
}