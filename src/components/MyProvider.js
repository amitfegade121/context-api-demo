import React from "react";
import MyContext from "./MyContext";

const MyProvider = props => {
  return (
    <MyContext.Provider
      value={{
        books: [
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
        ],
        handleIncrementLikes: book => {
          console.log("Liked");
        },
        handleIncrementDisLikes: book => {
          console.log("Disliked");
        }
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
