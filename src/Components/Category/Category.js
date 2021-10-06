import React from "react";
import "./Category.css";
import { initProductsSagaAC } from "../../Redux/ActionCreators";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Category({ el }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const products = (name) => {
    dispatch(initProductsSagaAC(name.id));
    history.push("/products");
  };

  return (
    <div className="divOneCategory" onClick={() => products(el)}>
      <span>{el.name}</span>
    </div>
  );
}

export default Category;
