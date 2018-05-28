import {  fork } from 'redux-saga/effects';
import {getImageListWatcher} from './imageList';
import {postScoresWatcher} from './scores';
import {testWatcher} from './test'

export default function* rootSaga () {
    yield [
        fork(getImageListWatcher),
        fork(postScoresWatcher),
        fork(testWatcher)
    ];
}