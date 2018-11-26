import React, { Component } from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, Alert } from "react-native";
import { Navigation } from "react-native-navigation";
import ProductListItem from "../components/ProductListItem";

import { connect } from "react-redux";
import {
  getProducts,
  addProductToShoppingCar,
  removeProductFromShoppingCar
} from "../actions";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    Navigation.events().bindComponent(this);
  }

  static get options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: "shoppingCart",
            text: "Carrito"
          }
        ]
      }
    };
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "shoppingCart") {
      this.presentShoppingCartScreen();
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.products}
          renderItem={({ item }) => (
            <ProductListItem
              product={item}
              onAddToCartPress={this.addToShoppingCart.bind(this)}
              onRemoveToCartPress={this.removeFromShoppingCart.bind(this)}
            />
          )}
          keyExtractor={item => item.name}
        />
      </SafeAreaView>
    );
  }

  presentShoppingCartScreen() {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: "ShoppingCart",
              options: { topBar: { title: { text: "Carrito" } } }
            }
          }
        ]
      }
    });
  }

  componentWillMount() {
    this.props.getProducts();
  }

  addToShoppingCart(product) {
    this.props.addProductToShoppingCar(product);
  }

  removeFromShoppingCart(product) {
    this.props.removeProductFromShoppingCar(product);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

const mapStateToProps = ({ productsReducer }) => {
  const { products } = productsReducer;
  return { products };
};

export default connect(
  mapStateToProps,
  { getProducts, addProductToShoppingCar, removeProductFromShoppingCar }
)(HomeScreen);
