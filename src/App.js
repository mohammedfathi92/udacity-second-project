import React from "react";
import { Route, Switch } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import "./App.css";
import { Books, NotFound, Search } from "./components";

class BooksApp extends React.Component {
  state = {
    books: []  };

  async componentDidMount() {
    const books = await getAll();
    this.setState({ books});
  }


  onUpdate = (book, shelf) => {
    update(book, shelf).then((rep) => {
     getAll().then((books) => {
        this.setState({books});
      });
    });
  }

  render() {
        const { books} = this.state;
    return (
      <div className="app">
      <Switch>
        <Route exact path='/' render={() => (<Books books={books} onUpdate={this.onUpdate} />)}/>
        <Route exact path='/search' render={() => (<Search books={books} onUpdate={this.onUpdate} />)}/>
        <Route exact path='/404' component={NotFound} />
        </Switch>
      </div>
    );

      }
}

export default BooksApp;
