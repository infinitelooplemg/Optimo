import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CostumButton from "./CostumButton";
import { APPLE_BLUE_COLOR, CANDY_RED_COLOR } from "../constants";

export default class ProductListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isAddedToCart: false };
    this.renderButton = this.renderButton.bind(this);
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
          <View style={styles.priceButtonContainer}>
            <Text style={styles.description}> {product.price} </Text>
            <TouchableOpacity
              onPress={() => {
                if (!this.state.isAddedToCart) {
                  this.props.onAddToCartPress(product);
                } else {
                  this.props.onRemoveToCartPress(product);
                }
                this.setState(previousState => ({
                  isAddedToCart: !previousState.isAddedToCart
                }));
              }}
            >
              {this.renderButton()}
            </TouchableOpacity>
          </View>

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

  renderButton() {
    if (this.state.isAddedToCart) {
      return (
        <CostumButton
          title="Regresar del carrito"
          buttonColor={CANDY_RED_COLOR}
        />
      );
    } else {
      return (
        <CostumButton
          title="Agregar al Carrito"
          buttonColor={APPLE_BLUE_COLOR}
        />
      );
    }
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
  },
  priceButtonContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
