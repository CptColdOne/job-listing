import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from './filtersConstants';
import { FilterAction } from './types';

const filtersReducer = (state: string[] = [], action: FilterAction) => {
	if (action.type === ADD_FILTER) {
		return action.payload && state.includes(action.payload)
			? state
			: [...state, action.payload];
	} else if (action.type === REMOVE_FILTER) {
		return state.filter((item) => item !== action.payload);
	} else if (action.type === CLEAR_FILTERS) {
		return [];
	}

	return state;
};

export default filtersReducer;
