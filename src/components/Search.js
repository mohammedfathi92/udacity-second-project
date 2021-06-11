import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search, update } from "../BooksAPI";
import Results from "./Results";

class Search extends Component {
   state = {
    result: [],
  };

  updateQuery = (value) => {
    search(value).then(result => {
      if (result !== undefined && result != null && Array.isArray(result)) {
        let booksOnShelves = this.props.books;
        for (let book of result) {
          for (let i = 0; i < booksOnShelves.length; i++) {
            if (book.id === booksOnShelves[i].id) {
              book.shelf = booksOnShelves[i].shelf;
            }
          }
        }
        this.setState({ result: result });
      }
    });

  };


  render() {
         const { onUpdate } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => { this.updateQuery(event.target.value) }} />
          </div>
        </div>
        <div className="search-books-results">
          <Results books={this.state.result} onUpdate = {this.props.onUpdate}/>
        </div>
      </div>
    );
  }
}
export default Search;