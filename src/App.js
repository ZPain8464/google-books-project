import React, { Component } from 'react';
import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm';
import ListApp from './ListApp/ListApp';

import './App.css';

class App extends Component { 

  state = {
    books: []
  }

  addBooks(book) {
    this.setState({books: book.items});
  }

  render() {
    
    return(
      <>
      <div className="App">
        <Header />
      </div>
      <main>
        <SearchForm 
          handleAdd={book => this.addBooks(book)}/>
        <ListApp 
           books={this.state}/>
      </main>
      </>
    )
  }
}
export default App;