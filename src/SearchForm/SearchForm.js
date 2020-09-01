import React, { Component } from 'react';
import '../App.css'

import AddFilter from '../AddFilter/AddFilter';

class SearchForm extends Component {

    state = {
        book: "",
    }

    newQuery(book) {
        this.setState({
            book
        });
    }

      handleSubmit(e) {
          e.preventDefault();
          const API_KEY = 'AIzaSyDkffgGUpRDbUv18P6szFP5ml3F2ZYSa1M'
          const fields = 'items/volumeInfo(title,authors,description,imageLinks/smallThumbnail)'
          const url = `https://www.googleapis.com/books/v1/volumes?q="${this.state.book}"&key=${API_KEY}&maxResults=2&fields=${fields}`;
          fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong. Try again later!');
                }
                return res.json();
            })
            .then(data => {
                console.log(data)
                data.items.map(book => {
                    this.props.handleAdd(book);
                })  
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });
      }

    render() {
        
        return (
            <>
            <div className="SearchForm">
                <form 
                    className="SearchForm__Form"
                    onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="search">Search:</label>
                    <textarea 
                        name="search" 
                        id="search" 
                        placeholder="Search" 
                        value={this.state.book}
                        onChange={e => this.newQuery(e.target.value)}/>
                <div className="SearchForm__Buttons">
                    <button 
                        type="submit">Search</button>
                </div>
                </form>
            </div>
            <AddFilter />
            </>
        );
    }
}

export default SearchForm;