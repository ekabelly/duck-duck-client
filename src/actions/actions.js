import searchService from '../services/search.service';
import {SEARCH, SEARCH_PHRASE} from '../constants/actions-types.json';

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
})