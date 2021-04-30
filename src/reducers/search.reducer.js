import { SEARCH } from '../constants/actions-types.json';

const SearchReducer = (state = {
    searchResults: [],
    lastSearch: ''
}, action) => {
    if (action.type === SEARCH) {
        return {
            ...state,
            searchResults: {
                ...state.searchResults,
                [action.payload.query]: action.payload.results
            },
            lastSearch: action.payload.query
        };
    }
    return state;
}

export default SearchReducer;