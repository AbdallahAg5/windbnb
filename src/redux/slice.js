import data from '@/data/data.json';
import { createSlice } from '@reduxjs/toolkit';
import { DataSearched, SearchAirbnb } from './reducers';

const InitialState = {
  data: data,
  locationFound: [],
  guestFound: [],
  dataSearched: [],
};

const AppSlice = createSlice({
  name: 'AppSlice',
  initialState: InitialState,
  reducers: {
    search: SearchAirbnb,
    dataSearched: DataSearched,
  },
});

export const { search, dataSearched } = AppSlice.actions;
export default AppSlice.reducer;
