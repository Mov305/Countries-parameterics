// action types
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const Load_BOOKS = 'Load_BOOKS';
export const EDIT_BOOK = 'EDIT_BOOK';

// state
export const initialBook = {
  id: 0,
  title: '',
  author: '',
  category: '',
  progress: 0,
  chapter: 'Chapter 1',
};
const initialState = [];

// action creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
}); // {type : revove_book, payload : id}

export const editBook = (id, book) => ({
  type: EDIT_BOOK,
  payload: { id, book },
});

// reducer
export default function booksReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK + '/fulfilled':
      return [...state, { ...initialBook, ...payload }];
    case REMOVE_BOOK + '/fulfilled':
      return state.filter((book) => book.id !== payload);
    case Load_BOOKS + '/pending':
      return 'loading';
    case Load_BOOKS + '/fulfilled':
      return [...payload];
    case EDIT_BOOK:
      return state.map((book) => {
        if (book.id === payload.id) {
          return { ...book, ...payload.book };
        }
        return book;
      });
    default:
      return state;
  }
}
