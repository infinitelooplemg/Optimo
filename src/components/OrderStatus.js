import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { HOST, PRESTASHOP_API_KEY } from "../constants";

export default class OrderStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { statusName: null, color: "blue" };
    this.getStatusDetail();
  }

  render() {
    const { statusName, color } = this.state;
    const { changeOrderstate } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Estado</Text>
        <View
          style={{
            backgroundColor: color,
            borderRadius: 5,
            padding: 5,
            marginVertical: 4
          }}
        >
          <Text
            onPress={() => {
              changeOrderstate();
            }}
            style={styles.status}
          >
            {statusName ? statusName : "Cargando"}
          </Text>
        </View>
      </View>
    );
  }

  getStatusDetail = () => {
    const { current_state } = this.props;
    axios
      .get(
        `${HOST}order_states/${current_state}?ws_key=${PRESTASHOP_API_KEY}&output_format=JSON`
      )
      .then(({ data }) => {
        const { order_state } = data;
        const { name, color } = order_state;
        const statusName = name[1].value;
        this.setState({ statusName, color });
      })
      .catch(err => console.log(err));
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    padding: 8
  },
  status: { fontSize: 13, fontWeight: "800", color: "white" },
  productPrice: { fontSize: 11, color: "gray" },
  title: { fontSize: 13, fontWeight: "800" }
});
