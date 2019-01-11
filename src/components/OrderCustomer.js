import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  TouchableWithoutFeedback
} from "react-native";
import axios from "axios";
import { HOST, PRESTASHOP_API_KEY } from "../constants";

export default class OrderCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      email: null,expanded:false
    };
    this.getOrderDetails();
    this.state = { expanded: false };
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  toggleView = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.toggleView}>
        <View style={styles.container}>
          <Text style={styles.title}>Cliente</Text>
          {this.renderBody()}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderBody = () => {
    const { expanded } = this.state;
    if (expanded) {
      const { firstname, email } = this.state;
      return (
        <View>
          <Text style={styles.name}>{firstname ? firstname : "Cargando"} </Text>
          <Text style={styles.name}>{email ? email : "Cargando"} </Text>
        </View>
      );
    }
  };

  getOrderDetails = () => {
    const { customerId } = this.props;
    axios
      .get(
        `${HOST}customers/${customerId}?ws_key=${PRESTASHOP_API_KEY}&output_format=JSON`
      )
      .then(({ data }) => {
        const { customer } = data;
        const { firstname, email } = customer;
        this.setState({ firstname, email });
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
  title: { fontSize: 13, fontWeight: "800" },
  name: { fontSize: 12, color: "gray", flex: 1, paddingVertical: 4 },
  productPrice: { fontSize: 11, color: "gray" }
});
