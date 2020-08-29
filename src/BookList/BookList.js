import React from 'react';

import '../App.css';

function BookList(props) {
    const books = props.books.Book;
    const renderBooks = books.map(book => {
        return (
        <>
            <h2>{book.title}</h2>
            <p><strong>Author</strong>: {book.authors}</p>
            <p><strong>Price</strong>: {book.price}</p>
            <p>{book.description}</p>
            <div className="Book_Image">
                <img src={book.thumbnail}/>
            </div>
            <hr />
        </>
        )
    })
    
    
    
    return (
        <section className="BookList">
            {renderBooks}
        </section>
    )
}

export default BookList;