import React from "react";

function BookView(props) {
  return (
    <div className="d-flex flex-row">
        <div className="p-2">
          <img src={props.book.image || "http://via.placeholder.com/130x180"} alt=""/>
        </div>
        <div className="p-2">
            <div>Author</div>
            <div>Category</div>
            <div>Publication Date</div>
        </div>
        <div className="p-2">
            <div>{props.book.author}</div>
            <div>{props.book.category}</div>
            <div>{props.book.publicationDate}</div>
        </div>
    </div>
  );
}

export default BookView;