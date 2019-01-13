import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from '../Shelf'
import * as BooksAPI from '../../BooksAPI'

class MainPage extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((resp) => {
      this.setState({ books: resp })
      console.log(this.state)
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((resp) => {
      book.shelf = shelf
      this.setState((prevState) => ({
        books: [...prevState.books.filter(b => b.id !== book.id), ...[book]]
      }))
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf
                  name="Currently Reading"
                  books={this.state.books.filter(book => book.shelf === "currentlyReading")}
                  changeShelf={this.changeShelf}
                />
                <Shelf
                  name="Want To Read"
                  books={this.state.books.filter(book => book.shelf === "wantToRead")}
                  changeShelf={this.changeShelf}
                />
                <Shelf
                  name="Read"
                  books={this.state.books.filter(book => book.shelf === "read")}
                  changeShelf={this.changeShelf}
                />
              </div>
            </div>
            <div>
              <Link className="open-search" to="/search">Add a book</Link>
            </div>
          </div>
    )
  }
}

export default MainPage