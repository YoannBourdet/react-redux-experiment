import { ADD_FILTER } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
  case ADD_FILTER:
    return Object.assign({}, state, {
      [action.id]: [
        action.filter,
      ],
    });
  default:
    return state;
  }
};
