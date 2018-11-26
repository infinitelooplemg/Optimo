import React, { Component } from "react";
import { SafeAreaView, StyleSheet,FlatList } from "react-native";
import { connect } from "react-redux";
import { getOrdersAction } from "../actions";
import OrderItem from "../components/OrderItem";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getOrdersAction();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.orders}
          renderItem={({ item }) => <OrderItem order={item}/>}
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

const mapStateToProps = ({ ordersReducer }) => {
  const { orders } = ordersReducer;
  return { orders };
};

export default connect(
  mapStateToProps,
  { getOrdersAction }
)(Orders);
