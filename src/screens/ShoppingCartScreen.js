import React, { Component } from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import { removeProductFromShoppingCar } from "../actions";
import CartProductListItem from "../components/CartProductListItem";
import CartProductListHeader from "../components/CartProductListHeader";
import _ from "lodash";

class ShoppingCartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    Navigation.events().bindComponent(this);
  }

  static get options() {
    return {
      topBar: {
        leftButtons: [
          {
            id: "cancel",
            text: "Cancelar"
          }
        ],
        rightButtons: [ {
          id: "confirm",
          text: "Confirmar"
        }]
      }
    };
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "cancel") {
      Navigation.dismissModal(this.props.componentId);
    }
  }

  removeFromShoppingCart(product) {
    this.props.removeProductFromShoppingCar(product);
  }

  render() {
    const { cartProducts } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={cartProducts}
          // ListHeaderComponent={() => (
          //   <CartProductListHeader cartProducts={cartProducts} />
          // )}
          renderItem={({ item }) => (
            <CartProductListItem
              product={item}
              onRemoveToCartPress={this.removeFromShoppingCart.bind(this)}
            />
          )}
          keyExtractor={item => item.name}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

const mapStateToProps = ({ cartReducer }) => {
  const { cartProducts } = cartReducer;
  return { cartProducts };
};

export default connect(
  mapStateToProps,
  { removeProductFromShoppingCar }
)(ShoppingCartScreen);
