import React from "react";
import moment from 'moment';

function BookView(props) {
  return (
    <div className="d-flex flex-row">
      <div className="p-2">
        <img src={props.book.image || "http://via.placeholder.com/130x180"} alt="" />
      </div>
      <div className="p-2">
        <div>Author <span className="text-muted">{props.book.author}</span></div>
        <div>Category <span className="text-muted">{props.book.category}</span></div>
        <div>Publication Date 
          <span className="text-muted ml-1">
            {moment(props.book.publicationDate, "YYYY-MM-DD").format('DD/MM/YYYY')}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookView;