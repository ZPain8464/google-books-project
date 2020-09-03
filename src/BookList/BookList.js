import React from "react";

import "../App.css";

function BookList(props) {
  const { books } = props;
  const renderBooks = books.length ? (
    books.map((book, i) => {
      const info = book.volumeInfo;
      return (
        <li key={i}>
          <h2>{info.title}</h2>
          <p>
            <strong>Author</strong>: {info.authors}
          </p>
          <p>{info.description}</p>
          <div className="Book_Image">
            <img src={info.imageLinks.smallThumbnail} alt={info.title} />
          </div>
        </li>
      );
    })
  ) : (
    <h2>No Results - Try a New Search</h2>
  );

  return (
    <section className="BookList">
      <ul>{renderBooks}</ul>
    </section>
  );
}

export default BookList;
