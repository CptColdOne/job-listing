import { ADD_POSITIONS } from './positionConstants';

export const addPositions = (positions: any) => ({
  type: ADD_POSITIONS,
  payload: positions
});
