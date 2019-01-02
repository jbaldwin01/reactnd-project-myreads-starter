import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './components/pages/SearchPage'
import MainPage from './components/pages/MainPage'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchPage/>
        )}/>
        <Route exact path='/' render={() => (
          <MainPage
            // books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
