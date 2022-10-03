// action types
export const CHECK_STATUS = 'CHECK_STATUS';

// state
const initialState = [];

// action creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// reducer
export default function categoryReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
