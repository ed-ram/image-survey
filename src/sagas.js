
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// watcher saga
export function* getImageListWatcher() {
    yield takeLatest('GET_LIST_REQUEST', getImageListWorker)
}

//axios request, returns a promise. Maybe should use fetch instead?
function fetchImageList() {
    return axios({
        method: "get",
        url: "/testo"
    })
}

//worker saga
function* getImageListWorker() {
    try {
        const response = yield call(fetchImageList);
        const list = response.data;
        console.log(list);
        yield put({ type: 'GET_LIST_SUCCESS', list })
    } catch (error) {
        yield put({ type: 'GET_LIST_FAILURE', error })
    }
}