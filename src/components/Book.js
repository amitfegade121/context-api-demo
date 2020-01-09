import React from "react";

const Book = props => {
  console.log(props);
  const { book, onIncrementLikes, onIncrementDisLikes } = props;

  return (
    <div className="card">
      <div className="card-header">{book.id}</div>
      <div className="card-body">
        <p>Book title: {book.title}</p>
        <p>Book price: {book.price}</p>
        <p>Total Book Likes: {book.likes}</p>
        <p>Total Book DisLikes: {book.dislikes}</p>
        <div>
          <button
            className="btn btn-secondary"
            onClick={() => onIncrementLikes(book)}
          >
            Like
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-secondary"
            onClick={() => onIncrementDisLikes(book)}
          >
            DisLike
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
