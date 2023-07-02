import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { LocalCrew } from 'types/crew';

export const crewAdapter = createEntityAdapter<LocalCrew>({
  selectId: (crew) => crew.slug,
});

const crewSlice = createSlice({
  name: 'crew',
  initialState: crewAdapter.getInitialState(),
  reducers: {
    addCrew: (state, action) => crewAdapter.addMany(state, action.payload),
  },
});

export const crewReducer = crewSlice.reducer;
export const addCrew = crewSlice.actions.addCrew;
