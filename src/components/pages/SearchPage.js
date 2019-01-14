import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book'
import sortBy from 'sort-by'

class SearchPage extends Component {
  state = {
    query: '',
    books: [],
    searchResults: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((resp) => {
      this.setState({ books: resp })
      // console.log(this.state)
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
  }

  updateQuery = (query) => {
    this.setState({ query: query }, this.searchBooks)
  }

  searchBooks() {
    if (this.state.query === '' || this.state.query === undefined) {
      return this.setState({ searchResults: []})
    } else {
      BooksAPI.search(this.state.query).then((resp) => {
        if (resp.error) {
          this.setState({ searchResults: []})
        } else {
          resp.forEach(element => {
            let matches = this.state.books.filter(book => book.id === element.id)
            if(matches[0]) {
              // console.log(`match=${matches[0].title}`)
              element.shelf = matches[0].shelf
            }
          })
          this.setState({ searchResults: resp})
          // console.log(this.state)
        }
      })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchResults.sort(sortBy('title')).map((book) => 
                <Book
                  key={book.id}
                  book={book}
                  changeShelf={this.changeShelf}
                />
              )
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage