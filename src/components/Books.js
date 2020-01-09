import React from "react";
import Book from "./Book";
import MyContext from "./MyContext";

const Books = () => (
  //   const { books, onIncrementLikes, onIncrementDisLikes } = props;

  <MyContext.Consumer>
    {context => (
      <React.Fragment>
        <h4>Books</h4>
        {context.books.map(book => {
          return (
            <Book
              book={book}
              key={book.id}
              onIncrementLikes={context.handleIncrementLikes}
              onIncrementDisLikes={context.handleIncrementDisLikes}
            />
          );
        })}
      </React.Fragment>
    )}
  </MyContext.Consumer>
);

export default Books;
