import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddNewBook from "./AddNewBook";
import {store} from "../redux/store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

describe("Add New Book", () => {
  test("should add a new book", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddNewBook/>
        </MemoryRouter>
      </Provider>);

    expect(store.getState().book.books.length).toEqual(3);
    const addBookBtn = screen.getAllByText("Add Book")[0];
    userEvent.click(addBookBtn);

    const titleInput = screen.getByPlaceholderText("The lord of the rings");
    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    expect(titleInput).toHaveValue('Test Title');
    const authorInput = screen.getByPlaceholderText("J.R.R Tolkien");
    fireEvent.change(authorInput, { target: { value: 'Test Author' } });
    expect(authorInput).toHaveValue('Test Author');

    const submitBtn = screen.getByText("Submit");
    userEvent.click(submitBtn);

    const book = store.getState().book.books.length;
    expect(book).toEqual(4);
  });
});
