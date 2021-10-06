import React from "react";
import { useDispatch } from "react-redux";
import {
  initOneProductSagaAC,
  deleteProductAC,
} from "../../Redux/ActionCreators";
import { useHistory } from "react-router-dom";
import "./Product.css";

function Product({ el }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const oneProduct = (obj) => {
    dispatch(initOneProductSagaAC(obj.id));
    history.push("/products/info");
  };

  const deleteProduct = (id) => {
    dispatch(deleteProductAC(id));
  };

  return (
    <div className="divProducts">
      <div>
        <span onClick={() => oneProduct(el)}> {el.name}</span>
        <button className="button" onClick={() => deleteProduct(el.id)}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default Product;
