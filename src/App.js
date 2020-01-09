import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/SignUp";
import ProductList from "./components/ProductList";
import MyProvider from "./components/MyProvider";

const App = () => {
  // const [books, setBooks] = useState([
  //   {
  //     id: 1,
  //     title: "Java in Action",
  //     price: 445,
  //     likes: 0,
  //     dislikes: 0
  //   },
  //   {
  //     id: 2,
  //     title: "React in Action",
  //     price: 533,
  //     likes: 0,
  //     dislikes: 0
  //   },
  //   {
  //     id: 3,
  //     title: "Spring Microservices",
  //     price: 800,
  //     likes: 0,
  //     dislikes: 0
  //   }
  // ]);

  // const handleIncrementLikes = book => {
  //   book.likes = book.likes + 1;
  //   setBooks();
  // };

  // const handleIncrementDisLikes = book => {
  //   let allBooks = [...books];
  //   let index = allBooks.indexOf(book);
  //   allBooks[index] = { ...book };
  //   allBooks[index] = allBooks[index].dislikes + 1;
  //   setBooks(allBooks);
  // };

  return (
    <MyProvider>
      <div className="container">
        <ProductList />
      </div>
    </MyProvider>
    // <div className="container">
    //   <SignUp />
    // </div>
  );
};

export default App;
