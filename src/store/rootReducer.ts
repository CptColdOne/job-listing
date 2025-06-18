import { combineReducers } from 'redux';
import positionReducer from './positions/positionReducer';
import filtersReducer from './filters/filtersReducer';

const rootReducer = combineReducers({ positions: positionReducer, filters: filtersReducer });

export default rootReducer;
