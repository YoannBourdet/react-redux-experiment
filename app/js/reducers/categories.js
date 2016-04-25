import { FETCH_CATEGORIES } from '../actions/categories';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_CATEGORIES:
      const { results } = action.data;
      return results;
    default:
      return state;
  }
};
