import React, { createRef, useState } from "react";
import MyContext from "./MyContext";

const MyProvider = props => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Java in Action",
      price: 445,
      likes: 0,
      dislikes: 0
    },
    {
      id: 2,
      title: "React in Action",
      price: 533,
      likes: 0,
      dislikes: 0
    },
    {
      id: 3,
      title: "Spring Microservices",
      price: 800,
      likes: 0,
      dislikes: 0
    }
  ]);

  const handleIncrementLikes = book => {
    let allBooks = [...books];
    let index = allBooks.indexOf(book);
    allBooks[index] = { ...book };
    allBooks[index].likes = allBooks[index].likes + 1;
    setBooks(allBooks);
    // console.log("Liked");
  };

  const handleIncrementDisLikes = book => {
    let allBooks = [...books];
    let index = allBooks.indexOf(book);
    allBooks[index] = { ...book };
    allBooks[index].dislikes = allBooks[index].dislikes + 1;
    setBooks(allBooks);
  };

  return (
    <MyContext.Provider
      value={{
        books: books,
        handleIncrementLikes: handleIncrementLikes,
        handleIncrementDisLikes: handleIncrementDisLikes
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
