import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  LayoutAnimation,
  UIManager
} from "react-native";
import { Navigation } from "react-native-navigation";
import { LIGHT_GRAY } from "../constants";
import { connect } from "react-redux";

import { getOrdersAction, resetOrderReducerAction } from "../actions";

import axios from "axios";
import { ORDER_STATES, PRESTASHOP_API_KEY, HOST } from "../constants";
import StateItem from "../components/StateItem";
import LoadingData from "../components/LoadingData";


class StatesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isUpdatingState: false };
    Navigation.events().bindComponent(this);
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  static get options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: "done",
            text: "Hecho"
          }
        ]
      }
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderStateList()}
      </SafeAreaView>
    );
  }

  renderStateList = () => {
    const { isUpdatingState } = this.state;
    if (isUpdatingState) {
      return <LoadingData text="Actualizando Orden..." />;
    } else {
      return (
        <FlatList
          data={ORDER_STATES}
          renderItem={({ item }) => (
            <StateItem state={item} onPress={this.selectState} />
          )}
          keyExtractor={item => item.text}
        />
      );
    }
  };
  navigationButtonPressed({ buttonId }) {
    if (buttonId === "done") {
      this.dismissScreen();
    }
  }

  componentDidDisappear() {
    this.props.resetOrderReducerAction();
    this.props.getOrdersAction();
  }

  dismissScreen = () => {
    this.setState({ isUpdatingState: true });
    Navigation.dismissModal(this.props.componentId);
  };

  selectState = state => {
    this.setState({ isUpdatingState: true });
    var xml = this.buildXml(state);
    let config = {
      headers: { "Content-Type": "application/xml" }
    };
    let url = `${HOST}orders/${state.id}?ws_key=${PRESTASHOP_API_KEY}`;
    axios
      .put(url, xml, config)
      .then(result => {
        console.log('resultado',result);
        
         this.dismissScreen();
      })
      .catch(err => {
        console.log('errorsito',err);
         this.dismissScreen();
      });
  };

  buildXml = state => {
    const { OrderDetail } = this.props;
    return `<?xml version="1.0" encoding="UTF-8"?>
    <prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
    <order>
      <id>${OrderDetail.id}</id>
      <id_address_delivery>${
        OrderDetail.id_address_delivery
      }</id_address_delivery>
      <id_address_invoice>${OrderDetail.id_address_invoice}</id_address_invoice>
       <id_cart>${OrderDetail.id_cart}</id_cart>
       <id_lang>${OrderDetail.id_lang}</id_lang>
        <id_customer>${OrderDetail.id_customer}</id_customer>
        <id_carrier>${OrderDetail.id_carrier}</id_carrier>
        <id_currency>${OrderDetail.id_currency}</id_currency>
    <current_state>${state.id}</current_state>
    </order>
    </prestashop>`;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_GRAY
  }
});

export default connect(
  null,
  { getOrdersAction, resetOrderReducerAction }
)(StatesScreen);
