import {combineReducers} from 'redux';
import logginReducer from "./isLogged";


const allReducers = combineReducers({
    isLogged: logginReducer
});

export default allReducers;
