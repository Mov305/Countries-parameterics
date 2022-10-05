import { configureStore } from '@reduxjs/toolkit';
import CountriesReducer from './countries';

const store = configureStore({
  reducer: {
    countries: CountriesReducer,
  },
});

export default store;
