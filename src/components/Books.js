import React, { Component } from "react";
import BookShelf from "../components/BookShelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Books extends Component {
  render() {
    const { books, onUpdate } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
              <BookShelf title={"Currently Reading"} books={books.filter( (book) => book.shelf === "currentlyReading" )} onUpdate={onUpdate} />
              <BookShelf title={"Want to Read"} books={books.filter( (book) => book.shelf === "wantToRead" )} onUpdate={onUpdate} />
              <BookShelf title={"Read"} books={books.filter( (book) => book.shelf === "read" )} onUpdate={onUpdate} />
            </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
      )}
  
}
export default Books;
