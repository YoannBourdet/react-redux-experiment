import { FETCH_CATEGORIES } from '../actions/categories';

export default (state = [], action) => {
  const { results } = action.category;
  switch(action.type) {
    case FETCH_CATEGORIES:
      return Object.assign({}, state, results);
    default:
      return state;
  }
};
