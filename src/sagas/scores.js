import * as types from '../actions/types';
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// watcher saga
export function* postScoresWatcher() {
    yield takeLatest(types.COMMIT_SCORE, postScoresWorker);
}

function sendScores (val) {
    return axios({
        method: 'post',
        url: '/scores',
        data: {date: new Date().toLocaleString(), scores: val}
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
