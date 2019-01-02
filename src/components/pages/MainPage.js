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
      console.log(this.state.books)
    })
  }

  // updateQuery = (query) => {
  //   this.setState({ query: query.trim() })
  // }

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
                />
                <Shelf
                  name="Want To Read"
                  books={this.state.books.filter(book => book.shelf === "wantToRead")}
                />
                <Shelf
                  name="Read"
                  books={this.state.books.filter(book => book.shelf === "read")}
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