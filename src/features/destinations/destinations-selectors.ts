import { destinationsAdapter } from './destinations-slice';
import { RootState } from 'store';

export const { selectIds: selectDestinationIds, selectById: selectDestinationById } =
  destinationsAdapter.getSelectors((state: RootState) => state.destinations);
