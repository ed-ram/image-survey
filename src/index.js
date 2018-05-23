import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootSaga from './sagas/root';
import rootReducer from './reducer/index';
import { saveState, loadState } from './localStorage/localStorage';

const persistedState = loadState();

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
/* IMPORTANT: store.subscribe should be throttled*/
store.subscribe(() => {
    saveState(store.getState());
})

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
