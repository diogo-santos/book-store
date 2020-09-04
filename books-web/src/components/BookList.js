import React from "react";

function BookList(props) {
  return (
    <div className="container">
      {props.books.map((book, i) => (
            <div className="d-flex flex-row" key={i}>
                <div className="p-2">
                  <img src={book.image || "http://via.placeholder.com/130x180"} alt=""/>
                </div>
                <div className="p-2">
                    <h6>{book.title}</h6>
                    <div>Author <span className="text-muted">{book.author}</span></div>
                    <div>Category <span className="text-muted">{book.category}</span></div>
                    <div className="d-flex flex-row mt-3">
                        <button 
                          type="button" 
                          data-testid="view-book"
                          className="btn btn-primary btn-sm"
                          data-toggle="modal" data-target={`#${props.viewBookModalId}`}
                          onClick={() => props.onView(book.id)}
                        >
                          View Book
                        </button>
                        <button 
                          type="button" 
                          data-testid="delete-book"
                          className="btn btn-danger btn-sm ml-2"
                          onClick={() => 
                            window.confirm(`Are you sure you wish to delete ${book.title}?`) 
                              && props.onDelete(book.id)
                          }
                        >
                          Delete Book
                        </button>
                    </div>
                </div>
            </div>
      ))}
    </div>
  );
} 

export default BookList;