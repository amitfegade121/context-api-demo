import React from "react";
import Books from "./Books";

const ProductList = props => {
  return (
    <React.Fragment>
      <h2>Products: </h2>
      <Books />
      {/* There may be more categories of the products  */}
      {/* Laptops */}
      {/* Phones */}
      {/* Cloths */}
    </React.Fragment>
  );
};

export default ProductList;
