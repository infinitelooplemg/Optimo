import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  TouchableWithoutFeedback
} from "react-native";
import OrderRow from "./OrderRow";

export default class OrderRows extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.toggleView}>
        <View style={styles.container}>
          <Text style={styles.title}>Productos</Text>
          {this.renderOrderRows()}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  toggleView = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  renderOrderRows = () => {
    const { expanded } = this.state;
    if (expanded) {
      const { order_rows } = this.props;
      return (
        <View>
          {order_rows.map(orderRow => (
            <OrderRow key={orderRow.product_id} orderRow={orderRow} />
          ))}
        </View>
      );
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    padding: 8
  },
  title: { fontSize: 13, fontWeight: "800" }
});
