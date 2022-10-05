import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOAD_COUNTRIES } from '.';

const fetchCountries = createAsyncThunk(LOAD_COUNTRIES, async (value = 'all') => {
  const response = await fetch(`https://restcountries.com/v3.1/${value}`);
  const data = await response.json();
  return data;
});

export default fetchCountries;
