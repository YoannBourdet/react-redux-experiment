import { FETCH_CATEGORIES } from '../actions/categories';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES:
      const category = action.category;
      const { results } = action.data;
      return Object.assign({}, state, {
        category,
        results,
      });
    default:
      return state;
  }
};
