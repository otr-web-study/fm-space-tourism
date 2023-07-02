import { technologyAdapter } from './technologies-slice';
import { RootState } from 'store';

export const { selectIds: selectTechnologiesIds, selectById: selectTechnologyById } =
  technologyAdapter.getSelectors((state: RootState) => state.technologies);
