import {store} from "../redux/store";
import bookSlice from "./bookSlice";

describe("Book Slice", () => {
  test("should add a new book", () => {
    expect(store.getState().book.books.length).toEqual(3);

    const newBook = {id: 1212, title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki"};
    store.dispatch(bookSlice.actions.addNewBook(newBook));

    const books = store.getState().book.books;
    expect(books.length).toEqual(4);
    expect(books[3]).toEqual(newBook);
  });
});
