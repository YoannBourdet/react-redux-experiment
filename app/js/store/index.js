import { combineReducers, createStore } from 'redux';
import { filters } from '../reducers';

export const store = createStore(combineReducers({
  filters,
}));
