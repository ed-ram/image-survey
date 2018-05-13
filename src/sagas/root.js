import {  fork } from 'redux-saga/effects';
import {getImageListWatcher} from './imageList';
import {postScoresWatcher} from './scores';

export default function* rootSaga () {
    yield [
        fork(getImageListWatcher),
        fork(postScoresWatcher)
    ];
}