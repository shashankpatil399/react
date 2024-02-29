import  { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import registrationReducer from "./reducer";



const store = createStore(
registrationReducer

);


export default store;