import React, { Component } from 'react';
import '../App.css'

import AddFilter from '../AddFilter/AddFilter';

class SearchForm extends Component {
    render() {
        return (
            <>
            <div className="SearchForm">
                <form className="SearchForm__Form">
                    <label htmlFor="search">Search:</label>
                    <textarea name="search" id="search" placeholder="Search" />
                </form>
                <div className="SearchForm__Buttons">
                    <button type="submit">Search</button>
                </div>
            </div>
            <AddFilter />
            </>
        );
    }
}

export default SearchForm;