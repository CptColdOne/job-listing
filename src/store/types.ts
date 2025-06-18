import { Position } from '../components/JobPosition/types';

export type RootState = {
  positions: Position[];
  filters: string[];
};
