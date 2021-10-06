import React from "react";
import { useSelector } from "react-redux";
import "./OneProduct.css";

function OneProduct(props) {
  const product = useSelector((state) => state.oneProduct);
  return (
    <div className="oneProduct">
      <div className="info">
        <img src={product.image} alt="productImage" />
        <h3>id:{product.id}</h3>
        <h1>name:{product.name}</h1>
        <h5>cal:{product.ccal}</h5>
        <h2>date:{product.date}</h2>
        <h2>categoryID:{product.category_id}</h2>
        <h2>{product.created_at}</h2>
        <h2>{product.updated_at}</h2>
      </div>
    </div>
  );
}

export default OneProduct;
