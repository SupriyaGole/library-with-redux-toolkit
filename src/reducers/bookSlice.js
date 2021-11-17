import {createSlice} from "@reduxjs/toolkit";

const books = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
  },
  {
    id: 2,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
  },
  {
    id: 3,
    title: "The Lord of the Rings",
    author: "J.R.R Tolkien",
  }];

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books,
  },
  reducer: {}
});

export default bookSlice.reducer;
