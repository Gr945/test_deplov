import {
  INIT_CATEGORY,
  POISK_CATEGORY,
  POISK_PRODUCT,
  INIT_PRODUCTS,
  INIT_ONE_PRODUCT,
  DELETE_PRODUCT,
} from "./ActionTypes";

const initialState = {
  category: [],
  products: [],
  oneProduct: {},
  poiskCategory: "",
  poiskProduct: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_CATEGORY:
      return { ...state, category: action.payload };
    case INIT_PRODUCTS:
      return { ...state, products: action.payload };
    case INIT_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    case DELETE_PRODUCT:
      return { ...state, products:state.products.filter(el => el.id !== action.payload) };
    case POISK_CATEGORY:
      return { ...state, poiskCategory: action.payload };
    case POISK_PRODUCT:
      return { ...state, poiskProduct: action.payload };
    default:
      return state;
  }
}
