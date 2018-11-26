import {
  CART_PRODUCTS_FETCH_FAILURE,
  CART_PRODUCTS_FETCH_IS_LOADING,
  CART_PRODUCTS_FETCH_SUCCESS,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART
} from "../actions/ActionTypes";

const INITIAL_STATE = {
  cartProducts: [],
  isLoading: false
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REMOVE_PRODUCT_FROM_CART:
      const { name } = action.payload;
      const { cartProducts } = state;
      const filteredProducts = cartProducts.filter(item => item.name !== name);
      return { ...state, cartProducts: filteredProducts };
    case ADD_PRODUCT_TO_CART:
      const actualProducts = state.cartProducts.concat(action.payload);
      return { ...state, cartProducts: actualProducts };
    default:
      return state;
  }
};
