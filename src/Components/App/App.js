import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "../Navigation/Nav";
import { useDispatch, useSelector } from "react-redux";
import Category from "../Category/Category";
import { initCategorySagaAC } from "../../Redux/ActionCreators";
import Product from "../Product/Product";
import OneProduct from "../OneProduct/OneProduct";
import Pagination from "../Pagination/Pagination";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const stateProd = useSelector((state) => state.products);

  const [carrent, setCarrent] = useState(1);
  const [productPerPage] = useState(10);

  const initCategory = () => {
    dispatch(initCategorySagaAC());
  };

  useEffect(() => {
    initCategory();
  }, []);

  const sortArrCategory = state.category.filter((el) =>
    el.name.toUpperCase().includes(state.poiskCategory.toUpperCase())
  );

  const lastProdInd = carrent * productPerPage;
  const firstProdInd = lastProdInd - productPerPage;
  const carrentProduct = stateProd.slice(firstProdInd, lastProdInd);

  const paginate = (page) => setCarrent(page);

  const sortArrProduct = carrentProduct.filter((el) =>
    el.name.toUpperCase().includes(state.poiskProduct.toUpperCase())
  );

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <div className="categoryDiv">
            {sortArrCategory.length ? (
              sortArrCategory.map((el) => <Category key={el.id} el={el} />)
            ) : (
              <div>список категорий пуст</div>
            )}
          </div>
        </Route>
        <Route exact path="/products">
          <div className="categoryDiv">
            {sortArrProduct.length ? (
              sortArrProduct.map((el) => <Product key={el.id} el={el} />)
            ) : (
              <div>список продуктов пуст</div>
            )}
            <Pagination
              productPerPage={productPerPage}
              totalProducts={stateProd.length}
              paginate={paginate}
            />
          </div>
        </Route>
        <Route exact path="/products/info">
          <div className="categoryDiv">
            <OneProduct />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
