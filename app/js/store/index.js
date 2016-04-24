import { combineReducers, createStore } from 'redux';
import { categories, filters } from '../reducers';

export const store = createStore(combineReducers({
  categories,
  filters,
}));
