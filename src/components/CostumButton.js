import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { APPLE_BLUE_COLOR } from "../constants";

export default class CostumButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={[styles.container, { backgroundColor: this.props.buttonColor }]}
      >
        <Text style={styles.buttonText}> {this.props.title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    backgroundColor: "white",
    margin: 8,
    borderRadius: 10,
    // backgroundColor: APPLE_BLUE_COLOR,

    justifyContent: "center",
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignSelf: "center"
  }
});
