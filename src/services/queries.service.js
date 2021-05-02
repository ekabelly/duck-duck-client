/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

import { searchApiBaseUrl } from '../constants/app-constants';

const fetchPastQueries = async () => {
    const res = (await axios.get(searchApiBaseUrl + 'past-queries')).data;
    return res;
}

export default {fetchPastQueries};