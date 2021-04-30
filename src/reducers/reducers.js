import {combineReducers} from 'redux';

import SearchReducer from './search.reducer';

export default combineReducers({
    search: SearchReducer
})