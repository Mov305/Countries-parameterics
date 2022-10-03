import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories/categories';
import booksReducer from './books/books';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoryReducer,
  },
});

export default store;
