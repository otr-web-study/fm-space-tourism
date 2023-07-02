import { crewAdapter } from './crew-slice';
import { RootState } from 'store';

export const { selectIds: selectCrewIds, selectById: selectCrewById } = crewAdapter.getSelectors(
  (state: RootState) => state.crew,
);
