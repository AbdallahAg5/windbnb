import { configureStore } from '@reduxjs/toolkit';
import AppSlice from './slice';

const store = configureStore({
  reducer: {
    app: AppSlice,
  },
});

export default store;
