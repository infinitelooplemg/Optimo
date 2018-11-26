import {
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAILURE,
  PRODUCTS_FETCH_IS_LOADING
} from "../actions/ActionTypes";

const INITIAL_STATE = {
  products: [],
  isLoading: false
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_IS_LOADING:
      return { ...state, isLoading: true };
    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false
      };
    case PRODUCTS_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
