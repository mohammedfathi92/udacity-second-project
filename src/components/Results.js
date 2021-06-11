import React, { Component } from "react";
import Book from "./Book";

class Results extends Component {
  
  render() {
    let books = this.props.books;

  return (
        <ol className="books-grid">
          {books && books.map((book) => (
              <Book key={book.id} book={book} onUpdate={this.props.onUpdate} />
            ))}
        </ol>
  );
  }
}

export default Results;
