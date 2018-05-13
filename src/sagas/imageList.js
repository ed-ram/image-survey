
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/types'

// watcher saga
export function* getImageListWatcher() {
    yield takeLatest(types.GET_LIST_REQUEST, getImageListWorker)
}

function fetchImageList() {
    return axios({
        method: "get",
        url: "/imagegroups"
    })
}

function create_scores_array(objectArray) {
    let output = []
    objectArray.map(
        (i) => {
            output.push(
                {
                    uuid: i["uuid"],
                    score: ''
                }
            )
        }
    )
    return(output)
}

//worker saga
function* getImageListWorker() {
    try {
        const response = yield call(fetchImageList);
        const imageGroups = response.data
        const scores = create_scores_array(imageGroups)

        yield put({ type: types.GET_LIST_SUCCESS, payload: {imageGroups, fetching: false} })
        yield put({ type: types.POPULATE_SCORES, payload: scores })
    } catch (error) {
        yield put({ type: types.GET_LIST_FAILURE, error })
    }
}