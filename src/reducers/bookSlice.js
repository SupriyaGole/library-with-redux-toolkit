import {createSlice} from "@reduxjs/toolkit";

const books = [
  {
    id: new Date().getTime(),
    title: "1984",
    author: "George Orwell",
  },
  {
    id: new Date().getTime(),
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
  },
  {
    id: new Date().getTime(),
    title: "The Lord of the Rings",
    author: "J.R.R Tolkien",
  }];

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books,
  },
  reducers: {
    addNewBook: (state, action) => {
      state.books = [...state.books, action.payload]
    }
  }
});

export default bookSlice;
