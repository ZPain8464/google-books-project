import React, { Component } from "react";
import Header from "./Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import BookList from "./BookList/BookList";

import "./App.css";

class App extends Component {
  state = {
    books: [],
  };

  addBooks(book) {
    this.setState({ books: book.items ? book.items : [] });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SearchForm handleAdd={(book) => this.addBooks(book)} />
          <BookList {...this.state} />
        </main>
      </div>
    );
  }
}
export default App;

/******
 * https://booksapi.google.com/volumes
 * C - create - POST
 * R - read - GET
 * U - update - PUT/PATCH
 * D - delete - DELETE
 */
