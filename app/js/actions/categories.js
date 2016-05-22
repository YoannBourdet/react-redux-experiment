import serviceCategories from '../services/categories';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const fetch = (category, parameters) => (dispatch) => {
  serviceCategories(category, parameters)
    .then(({ data }) => {
      dispatch({ type: FETCH_CATEGORIES, category, data });
      return { category, data };
    });
};
