import { ORDERS_FETCH_SUCCESS, RESET_ORDERS_REDUCER, ORDERS_FETCH_IS_LOADING } from "./ActionTypes";
const axios = require("axios");
var _ = require("lodash");

export const getOrdersAction = () => {
  return dispatch => {
    dispatch({ type: ORDERS_FETCH_IS_LOADING});

    axios
      .get(
        "http:127.0.0.1/~luis/prestashop_1.7.5.0/api/orders?ws_key=Z9C6PWC1JQ858UGW9NUZXTZADG1DXZ4N&output_format=JSON"
      )
      .then(({ data }) => {
        const { orders } = data;
        dispatch({ type: ORDERS_FETCH_SUCCESS, payload: orders });
      })
      .catch(err => console.log(err));
  };
};

export const resetOrderReducerAction = () => {
  return dispatch => {
    dispatch({ type: RESET_ORDERS_REDUCER });
  };
};
