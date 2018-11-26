import { ORDERS_FETCH_SUCCESS } from "./ActionTypes";

export const getOrdersAction = () => {
  return dispatch => dispatch({ type: ORDERS_FETCH_SUCCESS, payload: orders });
};

const orders = [
  {
    name: "Purse Essentials",
    order_date: "11/11/2018",
    status: "Pendiente de envio"
  },
  {
    name: "Rohto",
    order_date: "10/27/2018",
    status: "Pentiente de pago"
  },
  {
    name: "Pancreapar",
    order_date: "11/12/2018",
    status: "Enviado"
  },
  {
    name: "MISSHA M SHINY BB",
    order_date: "10/5/2018",
    status: "Recibido por el cliente"
  },
  {
    name: "Lidocaine Hydrochloride ",
    order_date: "7/17/2018",
    status: "Pentiente de pago"
  }
];
