import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import OrderRows from "./OrderRows";
import axios from "axios";
import { HOST, PRESTASHOP_API_KEY } from "../constants";
import LoadingData from "./LoadingData";
import OrderCustomer from "./OrderCustomer";
import OrderStatus from "./OrderStatus";
import _ from "lodash";
import OrderAddress from "./OrderAddress";

export default class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = { OrderDetail: null };
    this.getOrderDetails();
  }



  render() {
    return this.renderDetails();
  }

  renderDetails = () => {
    const { OrderDetail } = this.state;
    if (OrderDetail) {
      const {
        associations,
        id_customer,
        current_state,
        reference,
        id_address_delivery,
        total_paid
      } = OrderDetail;
      const { order_rows } = associations;

      let price = parseFloat(total_paid)
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.refefence}>{reference}</Text>
            <Text style={styles.refefence}>${price}</Text>
          </View>

          <OrderStatus
            current_state={current_state}
            changeOrderstate={this.changeOrderstate}
          />
          {/* <OrderCustomer customerId={id_customer} />
          <OrderAddress addressId={id_address_delivery} />
          <OrderRows order_rows={order_rows} />  */}
        </View>
      );
    } else {
      return <LoadingData text="Cargando Detalles..." />;
    }
  };

  changeOrderstate = () => {
    const { presentStatesScreen } = this.props;
    const { OrderDetail } = this.state;
    presentStatesScreen(OrderDetail);
  };

  getOrderDetails = () => {
    const { order } = this.props;
    const { id } = order;

    axios
      .get(
        `${HOST}orders/${id}?ws_key=${PRESTASHOP_API_KEY}&output_format=JSON`
      )
      .then(({ data }) => {
        const { order } = data;
        this.setState({ OrderDetail: order });
      })
      .catch(err => console.log(err));
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    margin: 8
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  refefence: {
    fontSize: 18,
    fontWeight: "800",
    margin: 8
  },
  labelRefetence: {
    fontSize: 13,
    fontWeight: "800"
  }
});
