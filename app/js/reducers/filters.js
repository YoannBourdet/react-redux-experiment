import { ADD_FILTER } from '../actions/filters';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return Object.assign({}, state, {
        [action.id]: action.filter,
      });
    default:
      return state;
  }
};
