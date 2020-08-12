//this is a dispatcher
//show route when the store wants to communicate with reducer

import {combineReducers} from 'redux';
//import contact reducer
import contactReducer from './contactReducer';
export default combineReducers({
    contact: contactReducer
})