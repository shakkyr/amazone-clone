import React from "react";
import "./Product.css";

const Product = ({title, image, price, rating}) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>the kean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
      <input type="button" value="Add to Basket"/>
    </div>
  );
};

export default Product;
