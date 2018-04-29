import imageListReducer from './image_list'; 
import {loginReducer}  from './login'; 
import counterReducer from './counter';
import {  combineReducers } from "redux";
import scores from './scores';

export default combineReducers({
    counter: counterReducer,
    loginReducer,
    imageList: imageListReducer,
    scores: scores
})