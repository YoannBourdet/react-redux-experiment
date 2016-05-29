import { FETCH_CATEGORIES } from '../actions/categories';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES:
      const category = action.category;
      const data = action.data;
      return Object.assign({}, state, {
        category,
        data,
      });
    default:
      return state;
  }
};
