import React, { Component } from 'react';

import { getBooks, deleteBook } from "./services/BookService";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Title from "./components/Title";
import BookList from "./components/BookList";
import Pagination from "react-js-pagination";
import DropDown from "./components/DropDown";
import Modal from './components/Modal';
import BookView from './components/BookView';
import Alert from './components/Alert';

const SORT_OPTIONS = [
  { text: "Title", value: "title" },
  { text: "Author", value: "author" },
  { text: "Category", value: "category" },
  { text: "Publication date", value: "publicationDate" }
];

const PAGE_SIZE_OPTIONS = [
  { text: "5 per page", value: 5 },
  { text: "10 per page", value: 10 },
  { text: "50 per page", value: 50 }
];

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      books: [],
      totalElements: 0,
      pageNumber: 1,
      pageSize: 5,
      sortBy: "publicationDate",
      bookView: {},
      alertMessage: ""
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
    this.handleViewBook = this.handleViewBook.bind(this);
    this.handleDeleteBook = this.handleDeleteBook.bind(this);
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
  }
  componentDidMount() {
    this.fetchBooks();
  }
  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  handleCloseAlert() {
    this.setState({
      alertMessage: ""
    })
  } 
  fetchBooks() {
    getBooks(this.state.pageNumber, this.state.pageSize, this.state.sortBy)
    .then(this.handleErrors)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        books: data.books || [],
        totalElements: data.totalElements || 0
      })
    })
    .catch(() => { 
      this.setState({
        alertMessage: "It was not possible to fetch books. Please, try again later"
      })
    });
  }
  handlePageChange(pageNumber) {
    this.setState({
      pageNumber: pageNumber
    }, () => {
      this.fetchBooks()
    });
  }
  handleSortChange(sortBy) {
    this.setState({
      sortBy: sortBy
    }, () => {
      this.fetchBooks()
    });
  }
  handlePageSizeChange(pageSize) {
    this.setState({
      pageSize: pageSize
    }, () => {
      const lastPage = Math.ceil(this.state.totalElements / pageSize); 
      if (this.state.pageNumber > lastPage) { 
        this.handlePageChange(lastPage);
      } else {
        this.fetchBooks();
      }
    });
  }
  handleViewBook(id) {
    this.setState((state) => ({
       bookView: state.books.find(book => book.id === id) 
    }));
  }
  handleDeleteBook(id) {
    deleteBook(id)
      .then(this.handleErrors)
      .then(response => {
        if (response.ok) {
          if (this.state.books.length === 1) {
            this.handlePageChange(this.state.pageNumber -1);
          } else {
            this.fetchBooks();
          }
        }
      })
      .catch(() => { 
        this.setState({
          alertMessage: "It was not possible to delete. Please, try again later"
        })
      });;
  }
  render() {
    return (
      <div className="container">
        <Title 
          title="Book Store App"
        />
        { this.state.alertMessage && (
          <Alert
            type="warning"
            message={<div><strong>Holy guacamole!</strong> {this.state.alertMessage}</div>}
            onClose={this.handleCloseAlert}
          />
        )}
        { this.state.books.length > 0 && (
          <div className="d-flex justify-content-end mt-2">
            <DropDown 
              label="Sort By"
              options={SORT_OPTIONS}
              onChange={this.handleSortChange}
            />
          </div>
        )}
        <Modal
          id="viewBookModal"
          title={this.state.bookView.title}
          body={<BookView book={this.state.bookView} />}
        />
        <BookList
          books={this.state.books}
          viewBookModalId="viewBookModal"
          onView={this.handleViewBook}
          onDelete={this.handleDeleteBook}
        />
        { this.state.books.length > 0 && (
          <div className="d-flex justify-content-center mt-2">
              <DropDown
                label="Page size"
                options={PAGE_SIZE_OPTIONS}
                onChange={this.handlePageSizeChange}
                class="mr-2"
              />
              <Pagination
                activePage={this.state.pageNumber}
                itemsCountPerPage={this.state.pageSize}
                totalItemsCount={this.state.totalElements}
                pageRangeDisplayed={5}
                itemClass="page-item"
                linkClass="page-link"
                onChange={this.handlePageChange}
              />
          </div>
        )}
      </div>
    );
  }
}

export default App;