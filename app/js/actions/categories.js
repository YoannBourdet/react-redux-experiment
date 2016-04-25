import serviceCategories from '../services/categories';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const fetch = (category) => (dispatch) => {
  serviceCategories(category)
    .then(({ data }) => {
      dispatch({ type: FETCH_CATEGORIES, data });
    });
};
