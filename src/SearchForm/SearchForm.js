import React, { Component } from 'react';
import '../App.css'

import AddFilter from '../AddFilter/AddFilter';

class SearchForm extends Component {

    // saleinfo/ isEbook, retailprice/amount , 
    //saleability/FREE or NOT_FOR_SALE or FOR_SALE --> listPrice/amount, buyLink

    state = {
        book: "",
        printType: "",
        availability: "",
    }

    newQuery(book) {
        this.setState({
            book
        });
    }

      handleSubmit(e) {
          e.preventDefault();
          console.log(this.state)
          const API_KEY = 'AIzaSyDkffgGUpRDbUv18P6szFP5ml3F2ZYSa1M'
          const fields = 'items/volumeInfo(title,authors,description,imageLinks/smallThumbnail)'
          const url = `https://www.googleapis.com/books/v1/volumes?q="${this.state.book}"&key=${API_KEY}&maxResults=4&fields=${fields}&filter=${this.state.availability}&printType=${this.state.printType}`;
          fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong. Try again later!');
                }
                return res.json();
            })
            .then(data => {
                this.setState({
                    title: "",
                    price: "",
                    description: "",
                    authors: "",
                    thumbnail: ""
                })
            this.props.handleAdd(data);
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });
      }

    addPrintType = (printType) => {
        this.setState({
            printType: printType
        })
    }

    addAvailability = (availability) => {
        this.setState({
            availability: availability
        })
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
            <AddFilter 
                handlePrintType={printType => this.addPrintType(printType)}
                handleAvailability={availability => this.addAvailability(availability)}/>
            </>
        );
    }
}

export default SearchForm;