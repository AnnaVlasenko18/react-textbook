import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filtersSlice';
import { tasksReduser } from './tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReduser,
    filters: filtersReducer,
  },
});
