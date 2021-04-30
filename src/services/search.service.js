import axios from 'axios';

import { searchApiBaseUrl } from '../constants/app-constants';

const searchService = async searchPhrase => {
    const res = (await axios.get(searchApiBaseUrl + searchPhrase)).data;
    return res;
}

export default searchService;