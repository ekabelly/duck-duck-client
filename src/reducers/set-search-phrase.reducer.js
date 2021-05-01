import {SEARCH_PHRASE} from '../constants/actions-types.json';

const SetSearchPhrase = (state = '', action) =>
    action.type === SEARCH_PHRASE ? action.payload : state;

export default SetSearchPhrase;