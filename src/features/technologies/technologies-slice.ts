import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { LocalTechnology } from 'types/technology';

export const technologyAdapter = createEntityAdapter<LocalTechnology>({
  selectId: (tech) => tech.slug,
});

const technologiesSlice = createSlice({
  name: 'technologies',
  initialState: technologyAdapter.getInitialState(),
  reducers: {
    addTechnologies: (state, action) => technologyAdapter.addMany(state, action.payload),
  },
});

export const technologiesReduser = technologiesSlice.reducer;
export const addTechnologies = technologiesSlice.actions.addTechnologies;
