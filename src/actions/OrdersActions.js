import { ORDERS_FETCH_SUCCESS, RESET_ORDERS_REDUCER, ORDERS_FETCH_IS_LOADING } from "./ActionTypes";
const axios = require("axios");
var _ = require("lodash");

import {HOST,PRESTASHOP_API_KEY} from '../constants'
export const getOrdersAction = () => {
  return dispatch => {
    dispatch({ type: ORDERS_FETCH_IS_LOADING});

    axios
      .get(
        `${HOST}orders?ws_key=${PRESTASHOP_API_KEY}&output_format=JSON`
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
