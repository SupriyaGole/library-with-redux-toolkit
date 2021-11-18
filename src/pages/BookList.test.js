import React from "react";
import {render} from "@testing-library/react";
import BookList from "./BookList";
import {Provider} from "react-redux";
import { store } from '../redux/store';

describe("BookList", () => {
  test("should render book list with default books", () => {
    const {container, baseElement} = render(
      <Provider store={store}>
        <BookList/>
      </Provider>);
    expect(container).toMatchSnapshot();
    expect(baseElement).toMatchSnapshot();
  });
});
