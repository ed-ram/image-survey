import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {getAccessToken} from '../Authorisation/Auth'
import API_URL from '../api_config';

const TEST = 'TEST';

// watcher saga
export function* testWatcher() {
    yield takeLatest(TEST, sendTestWorker);
}

function sendTest () {
    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken);
    return axios({
        method: 'get',
        url: `${API_URL}/test`,
        headers: { 'Authorization': `Bearer ${accessToken}`}
    })
};

//worker
function* sendTestWorker(action) {
    try{ 
        const response = yield call(sendTest);
        console.log(response);
    }
    catch (error){
        console.log(`error from test saga${error}`);
    }
}
