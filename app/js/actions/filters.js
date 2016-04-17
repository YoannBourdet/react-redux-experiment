export const ADD_FILTER = 'ADD_FILTER';

export const add = (id, filter) => (
  { type: ADD_FILTER, id, filter }
);
