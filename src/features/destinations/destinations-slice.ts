import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { LocalDestination } from 'types/destination';

export const destinationsAdapter = createEntityAdapter<LocalDestination>({
  selectId: (dst) => dst.slug,
});

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState: destinationsAdapter.getInitialState(),
  reducers: {
    addDestinations: (state, action) => destinationsAdapter.addMany(state, action.payload),
  },
});

export const destinationsReducer = destinationsSlice.reducer;
export const addDestinations = destinationsSlice.actions.addDestinations;
