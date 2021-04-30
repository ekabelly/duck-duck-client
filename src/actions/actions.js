import searchService from '../services/search.service';
import {SEARCH} from '../constants/actions-types.json';

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