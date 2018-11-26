import { ORDERS_FETCH_SUCCESS } from "../actions/ActionTypes";

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
    default:
      return state;
  }
};
