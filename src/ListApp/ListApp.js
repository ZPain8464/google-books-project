import React, { Component } from 'react';
import BookList from '../BookList/BookList';

import '../App.css';

class ListApp extends Component {
    render() {
       
        return (
            <div className="ListApp">
                <BookList 
                    {...this.props}/>
            </div>
        )
    }
}

export default ListApp