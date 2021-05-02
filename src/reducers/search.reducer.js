import { SEARCH, FETCH_QUERIES } from '../constants/actions-types.json';

const makeQueriesObj = queriesArr => {
    const queriesObj = {};
    for (const query of queriesArr) {
        queriesObj[query] = [];
    }
    return queriesObj;
}

const search = (state, actionPayload) => ({
    ...state,
    searchResults: {
        ...state.searchResults,
        [actionPayload.query]: actionPayload.results
    },
    lastSearch: actionPayload.query
});

const queries = (state, payload) => ({
    ...state,
    searchResults: {
        ...state.searchResults,
        ...makeQueriesObj(payload)
    }
});

const SearchReducer = (state = {
    searchResults: {},
    lastSearch: ''
}, action) => {
    if (action.type === SEARCH) {
        return search(state, action.payload);
    } else if(action.type === FETCH_QUERIES) {
        return queries(state, action.payload);
    }
    return state;
}

export default SearchReducer;