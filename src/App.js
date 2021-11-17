import React from "react";
import PageHeader from "./components/PageHeader";
import "./App.css";
import BookList from "./pages/BookList";

const App = () => {
  return (
    <section>
      <PageHeader/>
      <BookList />
    </section>
  )
};

export default App;
