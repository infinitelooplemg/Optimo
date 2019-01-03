import {
  ORDERS_FETCH_SUCCESS,
  RESET_ORDERS_REDUCER,
  ORDERS_FETCH_IS_LOADING
} from "../actions/ActionTypes";

const INITIAL_STATE = {
  orders: [],
  isLoading: false
};

export const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDERS_FETCH_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        isLoading: false
      };
    case ORDERS_FETCH_IS_LOADING:
      return { ...state, isLoading: true };
    case RESET_ORDERS_REDUCER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
