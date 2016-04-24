import serviceCategories from '../services/categories';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const fetch = (category) =>
  serviceCategories(category)
    .then(({ data }) => (
      { type: FETCH_CATEGORIES, data }
    ));
