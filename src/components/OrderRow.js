import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class OrderRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { orderRow } = this.props;
    const { product_name, product_quantity } = orderRow;
    return (
      <View style={styles.container}>
        <Text style={styles.productName}> {product_name} </Text>
        <Text style={styles.productPrice}> {product_quantity} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
    justifyContent: "space-between"
  },

  productName: { fontSize: 12, color: "gray", flex: 1 },
  productPrice: { fontSize: 12, color: "gray" }
});
