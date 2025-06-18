import { ADD_POSITIONS } from './positionConstants';
import { Position } from '../../components/JobPosition/types';

const positionReducer = (state: Position[] = [], action: any) => {
  if (action.type === ADD_POSITIONS) {
    return action.payload;
  }
  return state;
};

export default positionReducer;
