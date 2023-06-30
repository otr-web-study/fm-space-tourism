import { configureStore } from '@reduxjs/toolkit';
import { destinationsReducer } from 'features/destinations/destinations-slice';

export const store = configureStore({
  reducer: { destinations: destinationsReducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
