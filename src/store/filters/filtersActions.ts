import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from './filtersConstants';

export const addFilter = (filter: string) => ({
  type: ADD_FILTER,
  payload: filter
});

export const removeFilter = (filter: string) => ({
  type: REMOVE_FILTER,
  payload: filter
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS
});
