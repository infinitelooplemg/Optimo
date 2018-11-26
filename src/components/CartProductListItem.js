import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CostumButton from "./CostumButton";
import { APPLE_BLUE_COLOR, CANDY_RED_COLOR } from "../constants";

export default class CartProductListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isAddedToCart: false };
  }

  render() {
    const { product } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://www.optimonutricion.mx/wp-content/uploads/2014/05/ProxProductos.jpg"
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.productName}> {product.name}</Text>
          <Text style={styles.companyName}> {product.company_name} </Text>
          <Text style={styles.description}> {product.description} </Text>
          <Text style={styles.description}> {product.price} </Text>
          {/* <TouchableOpacity
            onPress={() => {
              this.props.onRemoveToCartPress(product);
            }}
          >
            <CostumButton
              title="Quitar del carrito"
              buttonColor={CANDY_RED_COLOR}
            />
          </TouchableOpacity> */}
          <View
            style={{
              borderTopColor: "gray",
              borderTopWidth: 0.3
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    marginVertical: 8,
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 16,
    borderRadius: 5
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
    margin: 8
  },
  productName: {
    fontWeight: "600",
    fontSize: 13,
    paddingVertical: 2
  },
  companyName: {
    fontWeight: "600",
    fontSize: 13,
    paddingVertical: 2
  },
  description: {
    textAlign: "auto",
    fontWeight: "600",
    fontSize: 13,
    color: "gray",
    paddingVertical: 2
  }
});
