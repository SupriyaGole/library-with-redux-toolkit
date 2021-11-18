import {configureStore} from "@reduxjs/toolkit";
import bookSlice from "../reducers/bookSlice";

export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
  }
});
