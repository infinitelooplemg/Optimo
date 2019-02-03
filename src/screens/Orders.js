import React, { Component } from "react";
import { SafeAreaView, Button, FlatList, View, StyleSheet } from "react-native";
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
    this.state = { count: 1 };
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
    this.slideOrders();
    if (isLoading) {
      return <LoadingData text="Cargando Ordenes" />;
    } else {
      return (
        <FlatList
          data={this.slideOrders()}
          renderItem={({ item }) => (
            <OrderItem
              order={item}
              presentStatesScreen={this.presentStatesScreen}
            />
          )}
          ListFooterComponent={this.renderFooter}
          keyExtractor={item => item.id}
        />
      );
    }
  };

  slideOrders = () => {
    let { orders } = this.props;
    let { count } = this.state;
    let multiplier = count * 5;
    return orders.reverse().slice(1, multiplier);
  };

  renderFooter = () => {
    const { isLoading } = this.props;
    if (!isLoading) {
      return (
        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE"
          }}
        >
          <Button
            onPress={() => {
              this.setState(prevState => ({
                count: prevState.count + 1
              }));
            }}
            title="Mostar mas ordenes"
          />
        </View>
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

    this.setState(prevState => ({
      count: 1
    }));

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
  console.log('ordenes',orders);
  return { orders, isLoading };
};

export default connect(
  mapStateToProps,
  { getOrdersAction }
)(Orders);
