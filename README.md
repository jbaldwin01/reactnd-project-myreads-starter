# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course and is part of Udacity's Front-End Web Developer Nanodegree.
The objective was to take the static CSS and HTML markup provided and write React code to add interactivity to the app.

## Project specifications
[Project Rubric](https://review.udacity.com/#!/rubrics/918/view)

## Running the app

To run the app:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Project structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # HTML template.
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app and is composed of two React components. Initially it contained static HTML.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── components # React components created for the app.
    │   ├── Book.js # React component which renders the book cover, title, authors and functionality for changing the book's shelf.
    │   ├── Shelf.js # React component which is used to render the 3 shelves displayed on the main page: "Currently Reading", "Want To Read" and "Read".
        └── pages # React components which render the 2 app pages.
    │       ├── MainPage.js # React component which renders the books in each shelf category. Books can be moved to other shelves.
    │       └── SearchPage.js # React component which allows the user to search for books using title or author. Books can then be added to shelves.
    ├── icons # Images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering. Updated to implement routing.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
