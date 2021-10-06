import {INIT_CATEGORY_SAGA, INIT_CATEGORY, POISK_CATEGORY,
   POISK_PRODUCT, INIT_PRODUCTS, INIT_PRODUCTS_SAGA,
   INIT_ONE_PRODUCT_SAGA, INIT_ONE_PRODUCT, DELETE_PRODUCT} from './ActionTypes'

//init category
export const initCategorySagaAC = () => {
  return {
    type: INIT_CATEGORY_SAGA,
  };
};

export const initCategoryAC = (payload) => {
  return {
    type: INIT_CATEGORY,
    payload,
  };
};

//poisk category
export const poiskCategoryAC = (payload) => {
  return {
    type: POISK_CATEGORY,
    payload,
  };
};

//poisk product
export const poiskProductAC = (payload) => {
  return {
    type: POISK_PRODUCT,
    payload,
  };
};

//init products
export const initProductsSagaAC = (payload) => {
  return {
    type: INIT_PRODUCTS_SAGA,
    payload
  };
};

export const initProductsAC = (payload) => {
  return {
    type: INIT_PRODUCTS,
    payload,
  };
};

//init one product
export const initOneProductSagaAC = (payload) => {
  return {
    type: INIT_ONE_PRODUCT_SAGA,
    payload
  };
};

export const initOneProductAC = (payload) => {
  return {
    type: INIT_ONE_PRODUCT,
    payload,
  };
};

//delete product
export const deleteProductAC = (payload) => {
  return {
    type: DELETE_PRODUCT,
    payload
  };
};
