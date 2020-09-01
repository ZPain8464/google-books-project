import React, { Component } from 'react';
import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm';
import ListApp from './ListApp/ListApp';

import './App.css';

class App extends Component { 

  addBooks(book) {
      this.setState({
        book: [book]
    })
  }

  render() {
    console.log(this.state)
    return(
      <>
      <div className="App">
        <Header />
      </div>
      <main>
        <SearchForm 
          handleAdd={book => this.addBooks(book)}/>
        <ListApp 
          {...this.state}/>
      </main>
      </>
    )
  }
}
export default App;