import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  LayoutAnimation,
  UIManager
} from "react-native";
import { connect } from "react-redux";
import { getOrdersAction } from "../actions";
import OrderItem from "../components/OrderItem";
import { LIGHT_GRAY } from "../constants";
import _ from "lodash";

import { Navigation } from "react-native-navigation";
import LoadingData from "../components/LoadingData";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.getOrdersAction();
    Navigation.events().bindComponent(this);
  }

  static get options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: "reload",
            text: "Recargar"
          }
        ]
      }
    };
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "reload") {
      this.props.getOrdersAction();
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderOrdersList()}
      </SafeAreaView>
    );
  }

  renderOrdersList = () => {
    const { isLoading, orders } = this.props;
    if (isLoading) {
      return <LoadingData text="Cargando Ordenes" />;
    } else {
      return (
        <FlatList
          data={orders.reverse()}
          renderItem={({ item }) => (
            <OrderItem
              order={item}
              presentStatesScreen={this.presentStatesScreen}
            />
          )}
          keyExtractor={item => item.id}
        />
      );
    }
  };

  presentStatesScreen = OrderDetail => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              passProps: { OrderDetail: OrderDetail },
              name: "States",
              options: {
                topBar: {
                  title: { text: "Cambiar Estado" },
                  subtitle: { text: `Orden: ${OrderDetail.reference}` }
                }
              }
            }
          }
        ]
      }
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_GRAY
  }
});

const mapStateToProps = ({ ordersReducer }) => {
  const { orders, isLoading } = ordersReducer;
  return { orders, isLoading };
};

export default connect(
  mapStateToProps,
  { getOrdersAction }
)(Orders);
