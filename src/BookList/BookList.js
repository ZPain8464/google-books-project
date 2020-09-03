import React from 'react';

import '../App.css';

function BookList(props) {
    const bookData = props.book.books.books;
    const renderBooks = bookData.map(book => {
        const books = book.volumeInfo;
        console.log(books)
        return (
            <>
            <h2>{books.title}</h2>
            <p><strong>Author</strong>: {books.authors}</p>
            <p>{books.description}</p>
            <div className="Book_Image">
                <img src={books.imageLinks.smallThumbnail}/>
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