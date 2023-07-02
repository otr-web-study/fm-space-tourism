import { configureStore } from '@reduxjs/toolkit';
import { destinationsReducer } from 'features/destinations/destinations-slice';
import { crewReducer } from 'features/crew/crew-slice';
import { technologiesReduser } from 'features/technologies/technologies-slice';

export const store = configureStore({
  reducer: {
    destinations: destinationsReducer,
    crew: crewReducer,
    technologies: technologiesReduser,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
