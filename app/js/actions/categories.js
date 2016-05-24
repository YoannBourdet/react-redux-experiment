import serviceCategories from '../services/categories';
import Promise from 'bluebird';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const fetch = (category, parameters = {}) => (dispatch) => (
  serviceCategories(category, parameters)
    .then(({ data }) => {
      dispatch({ type: FETCH_CATEGORIES, category, data });
      return Promise.resolve({ category, data });
    }));
