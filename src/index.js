import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import imageListReducer from './reducer/image_list'; 
import { loginReducer } from './reducer/login'; 
//import { getImageListWatcher } from './sagas/imageList'
import rootSaga from './sagas/root'



const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    loginReducer,
    imageListReducer
})

let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
