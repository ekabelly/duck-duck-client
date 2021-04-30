import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';

import reducers from '../reducers/reducers';
import err from './err.middleware';

export default createStore(reducers, applyMiddleware(
    createPromise({ types: { fullfiled: 'success' } }),
    thunk,
    createLogger(),
    err)
);