import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*import { BrowserRouter } from 'react-router-dom';*/
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import { reducer } from './reducer/image_list_reducer'; 
import { getImageListWatcher } from './sagas'

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(getImageListWatcher);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
