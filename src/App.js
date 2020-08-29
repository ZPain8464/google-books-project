import React, { Component } from 'react';
import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm';
import ListApp from './ListApp/ListApp';

import './App.css';

const books = {
  Book: [
    {
      title: "Floret Farm's A Year in Flowers",
      price: 21.99, 
      id: "GxXGDwAAQBAJ",
      authors: 'Erin Benzakein',
      description: "Learn how to buy, style, and present seasonal flower arrangements for every occasion.",
      thumbnail: "http://books.google.com/books/content?id=WVLXDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
    },
    {
      title: "The Flower Book",
      price: 11.99,
      id: 'WVLXDwAAQBAJ',
      authors: 'Rachel Siegfried',
      description: "The Flower Book explores 60 flowers, bloom-by-bloom in stunning portraiture.",
      thumbnail: "http://books.google.com/books/content?id=AwGialii_IkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
    }
  ]
}

class App extends Component {
  render() {
    return(
      <>
      <div className="App">
        <Header />
      </div>
      <SearchForm />
      <ListApp 
        books={books}/>
      </>
    )
  }
}
export default App;