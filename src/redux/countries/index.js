// action types
export const LOAD_COUNTRIES = 'LOAD_COUNTRIES';

// state
const initialState = [];

// action creators

// reducer
export default function CountriesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_COUNTRIES + '/pending':
      return [];
    case LOAD_COUNTRIES + '/fulfilled':
      return payload;
    default:
      return state;
  }
}
