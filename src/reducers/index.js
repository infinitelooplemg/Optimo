import { combineReducers } from "redux";
import { productsReducer } from "./ProductsReducers";
import { cartReducer } from "./CartReducer";
import { ordersReducer } from "./OrdersReducer";

export default combineReducers({
  productsReducer: productsReducer,
  cartReducer: cartReducer,
  ordersReducer: ordersReducer
});
