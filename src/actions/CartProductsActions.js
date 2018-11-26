import {
  CART_PRODUCTS_FETCH_SUCCESS,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART
} from "./ActionTypes";

export const getCartProducts = () => {
  return dispatch => dispatch({ type: CART_PRODUCTS_FETCH_SUCCESS });
};

export const addProductToShoppingCar = product => {
  return dispatch => dispatch({ type: ADD_PRODUCT_TO_CART, payload: product });
};

export const removeProductFromShoppingCar = product => {
  return dispatch =>
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: product });
};
