import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";

export default class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isAddedToCart: false };
  }

  render() {
    const { order } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://www.optimonutricion.mx/wp-content/uploads/2014/05/ProxProductos.jpg"
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.productName}> {order.name} </Text>
          <Text style={styles.date}> {order.order_date} </Text>
          <Text style={styles.date} onPress={this.showStatusPicker.bind(this)}>
            {order.status}
          </Text>
        </View>
      </View>
    );
  }

  showStatusPicker() {
    const { order } = this.props;
    Alert.alert(
      "Cambiar el estado de la orden",
      null,
      [
        {
          text: "Pendiente de envio",
          onPress: () => order.status = "Pendiente de envio",
        },
        {
          text: "Pendiente de pago",
          onPress: () => order.status = "Pendiente de pago",
        },
        {
          text: "Enviado",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Recibido por el cliente",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    marginVertical: 8,
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 16,
    borderRadius: 5
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
    margin: 8
  },
  productName: {
    fontWeight: "600",
    fontSize: 15,
    paddingVertical: 2
  },
  date: {
    fontWeight: "600",
    fontSize: 15,
    paddingVertical: 2,
    color: "gray"
  },
  description: {
    textAlign: "auto",
    fontWeight: "600",
    fontSize: 13,
    color: "gray",
    paddingVertical: 2
  }
});
