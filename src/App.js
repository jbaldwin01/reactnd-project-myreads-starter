import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './components/pages/SearchPage'
import MainPage from './components/pages/MainPage'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage/>
        )}/>
        <Route path='/search' component={SearchPage}/>
      </div>
    )
  }
}

export default BooksApp
