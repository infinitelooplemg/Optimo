import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ORDER_STATES } from "../constants";
export default class StateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { state, onPress } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={() => onPress(state)}>
          {state.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 4,
    margin: 8,
    borderRadius: 5
  },
  text: { fontSize: 18 }
});
