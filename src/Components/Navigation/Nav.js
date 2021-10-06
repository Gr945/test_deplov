import React from "react";
import { Route, Link } from "react-router-dom";
import "./Nav.css";
import { useDispatch } from "react-redux";
import { poiskCategoryAC, poiskProductAC } from "../../Redux/ActionCreators";

function Nav(props) {
  const dispatch = useDispatch();

  const poiskCategory = (e) => {
    dispatch(poiskCategoryAC(e.target.value));
  };

  const poiskProduct = (e) => {
    dispatch(poiskProductAC(e.target.value));
  };

  return (
    <div className="glavDiv">
      <Route exact path="/">
        <input
          placeholder="🔍︎ поиск по категориям"
          onChange={(e) => poiskCategory(e)}
        />
      </Route>
      <Route exact path="/products">
        <input
          placeholder="🔍︎ поиск продукта"
          onChange={(e) => poiskProduct(e)}
        />
        <Link to="/">на главную</Link>
      </Route>
      <Route exact path="/products/info">
        <Link to="/products">назад</Link>
      </Route>
    </div>
  );
}

export default Nav;
