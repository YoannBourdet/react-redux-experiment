import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { categories, filters } from '../reducers';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger());
}

export const store = createStore(
  combineReducers({
    categories,
    filters,
  }),
  applyMiddleware(...middleware)
);
