
import { takeLatest, call, put } from 'redux-saga/effects';


// watcher saga
export function* loginWatcher() {
    yield takeLatest('CHECK_LOGIN', isLoggedIn)
}


// check if logged in and return 
function isLoggedIn() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

//worker saga
function* isLoggedInWorker() {
    try {
        const response = yield call(isLoggedIn);
        yield put({ type: 'LOGIN_CHECKED', response })
    } catch (error) {
        console.log(error)
    }
}