import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager
} from "react-native";
import axios from "axios";
import { HOST, PRESTASHOP_API_KEY } from "../constants";

export default class OrderAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aaddress1: null,
      address2: null,
      postcode: null,
      city: null,
      expanded: false
    };
    this.getAddressDetail();
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
          <Text style={styles.title}>Dirección de entrega</Text>
          {this.renderBody()}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderBody = () => {
    const { expanded } = this.state;
    if (expanded) {
      const { address1, address2, postcode, city } = this.state;
      return (
        <View>
          <Text style={styles.addresItem}>
            {address1 ? address1 + " " + address2 : "Cargando"}
          </Text>
          <Text style={styles.addresItem}>
            {postcode ? postcode : "Cargando"}
          </Text>
          <Text style={styles.addresItem}>{city ? city : "Cargando"} </Text>
        </View>
      );
    }
  };

  toggleView = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  getAddressDetail = () => {
    const { addressId } = this.props;
    axios
      .get(
        `http:${HOST}addresses/${addressId}?ws_key=${PRESTASHOP_API_KEY}&output_format=JSON`
      )
      .then(({ data }) => {
        const { address } = data;
        const { address1, address2, postcode, city } = address;
        this.setState({ address1, address2, postcode, city });
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
  addresItem: { fontSize: 12, color: "gray", flex: 1 },
  title: { fontSize: 13, fontWeight: "800", paddingBottom: 4 }
});
