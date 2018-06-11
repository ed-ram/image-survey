import * as types from '../actions/types';
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import API_URL from '../api_config';

// watcher saga
export function* postScoresWatcher() {
    yield takeLatest(types.COMMIT_SCORE, postScoresWorker);
}

function sendScores (val) {
    const tok = localStorage.getItem('access_token')
    /*console.log(`accessing local storage in sendscores function: ${tok}`)*/
    return axios({
        method: 'post',
        url: `${API_URL}/scores`,
        data: { /*date: new Date().toLocaleString(),*/ 
                scores: val.scores,
                years_experience: val.years_experience,
                SVT_accredited: val.SVT_accredited,
                working_towards_acc: val.working_towards_acc},
        headers: {Authorization: `Bearer ${tok}`} 
    })
};

//worker
function* postScoresWorker(action) {
    try{
        const response = yield call(sendScores, action.payload);
        console.log(response);
        yield put({type: types.POST_SCORES_SUCCESS, payload: {scores_submitted: true}})
    }
    catch (error){
        console.log(error);
    }
}
