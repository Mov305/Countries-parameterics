import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  Load_BOOKS, ADD_BOOK, REMOVE_BOOK, initialBook,
} from './books';

const baseUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/yBs7zdi83jJUlIYXmxf0/books';

export const fetchBooks = createAsyncThunk(Load_BOOKS, async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  const books = Object.keys(data).map((key) => ({ ...initialBook, id: key, ...data[key][0] }));
  return books;
}); // {type : Load_BOOKS + '/rejected', payload : ''}'}
// {type : Load_BOOKS + '/fulfilled', payload : books}

export const addBookFetch = createAsyncThunk(ADD_BOOK, async (book) => {
  try {
    await fetch(baseUrl, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
  } catch (err) {
    console.log(err);
  }
  return book;
});

export const removeBookFetch = createAsyncThunk(REMOVE_BOOK, async (id) => {
  try {
    await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.log(err);
  }
  return id;
});
