import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import _ from 'lodash'

export default class CartProductListHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Header </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  }
});
