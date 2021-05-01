import {combineReducers} from 'redux';

import SearchReducer from './search.reducer';
import SetSearchPhrase from './set-search-phrase.reducer';

export default combineReducers({
    search: SearchReducer,
    searchPhrase: SetSearchPhrase
})