import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {ChakraProvider} from "@chakra-ui/react"
import AddNewBook from "./components/AddNewBook";

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/add-new-book" element={<AddNewBook/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
