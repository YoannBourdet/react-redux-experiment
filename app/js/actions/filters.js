export const ADD_FILTER = 'ADD_FILTER';
export const CHANGECATEGORY_FILTER = 'CHANGECATEGORY_FILTER';

export const add = (id, filter) => (
  { type: ADD_FILTER, id, filter }
);

export const changeCategory = (id, category) => (
  { type: ADD_FILTER, id, category }
);
