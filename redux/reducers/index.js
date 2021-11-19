import { combineReducers } from "redux";
import { category } from "./category";
import { products } from "./products";
import { product } from "./product";

export const reducer = combineReducers({
  Reducers: category,
  products,
  product,
});

export default reducer;
