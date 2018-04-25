
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
        url: "/imagegroups"
    })
}

//worker saga
function* getImageListWorker() {
    try {
        const response = yield call(fetchImageList);
        const imageGroups = response.data.ImageGroups
        console.log(imageGroups)
        /*const sList = response.data;
        const list = JSON.parse(response);*/
        yield put({ type: 'GET_LIST_SUCCESS', imageGroups })
    } catch (error) {
        yield put({ type: 'GET_LIST_FAILURE', error })
    }
}