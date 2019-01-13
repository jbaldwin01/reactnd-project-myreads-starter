import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, changeShelf } = this.props
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" 
              style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks && book.imageLinks.thumbnail) || "http://books.google.com/books/content?id=NLK2AAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"})` }}>
            </div>
            <div className="book-shelf-changer">
              <select value={book.shelf || "none"} onChange={(event) => changeShelf(book, event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors && book.authors.map((author, i) => {
            return <div key={i} className="book-authors">{author}</div>
          })}
        </div>
      </li>
    )
  }
}

export default Book