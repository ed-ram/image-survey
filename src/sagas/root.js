import {  fork } from 'redux-saga/effects';
import {loginWatcher} from './login'
import {getImageListWatcher} from './imageList'

export default function* rootSaga () {
    yield [
        fork(loginWatcher),
        fork(getImageListWatcher)
    ];
}