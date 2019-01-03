import React, { PureComponent } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default class LoadingData extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text } = this.props;
    return (
      <View style={styles.loading}>
        <Text style={styles.text}>{text}</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    alignSelf: "center",
    fontWeight: "800",
    paddingBottom: 16,
    fontSize: 13,
    textAlign: "center"
  }
});
