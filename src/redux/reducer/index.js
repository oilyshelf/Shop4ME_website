import {combineReducers} from 'redux';
import logginReducer from "./isLogged";
import sessionIDReducer from "./sessionIDReducer";
import errandsReducer from "./errandsReducer";
import errandReducer from "./errandReducer";
import itemListReducer from "./itemListReducer";
import itemsReducer from "./ItemsReducer";


const allReducers = combineReducers({
    isLogged: logginReducer,
    sessionID: sessionIDReducer,
    errandList: errandsReducer,
    errand: errandReducer,
    shopingList: itemListReducer,
    items: itemsReducer
});

export default allReducers;
