import searchService from '../services/search.service';
import queriesService from '../services/queries.service';
import {SEARCH, SEARCH_PHRASE, FETCH_QUERIES} from '../constants/actions-types.json';

const searchAction = payload => ({
    type: SEARCH,
    payload
})

export const makeSearch = searchPhrase => async dispatch => {
    const results = await searchService(searchPhrase);
    dispatch(searchAction({
        results,
        query: searchPhrase
    }));
}

export const setSearchPhrase = searchPhrase => ({
    type: SEARCH_PHRASE,
    payload: searchPhrase
});

export const fetchQueries = () => async dispatch => {
    const queriesArr = await queriesService.fetchPastQueries();
    dispatch({
        payload: queriesArr,
        type: FETCH_QUERIES
    });
}