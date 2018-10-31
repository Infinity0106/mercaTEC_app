import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconEnt from "react-native-vector-icons/Entypo";
import Toaster from "react-native-toaster";

import * as Ctrl from "./ctrl";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  componentWillMount() {}
  render() {
    let route_name = Ctrl.getCurrentRoute.bind(this)();

    return (
      <View
        style={{
          height: 80,
          backgroundColor: "#262626",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Toaster
          message={this.props.error.text ? this.props.error : null}
          onHide={Ctrl.hideToast.bind(this)}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 20
          }}
        >
          {this.renderLeft(route_name)}
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white", fontSize: 24 }}>MercaTEC</Text>
          </View>
          {this.renderRight(route_name)}
        </View>
      </View>
    );
  }

  renderLeft(scene) {
    if (scene == "ShoppingBag" || scene == "Account") {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={Ctrl.goBackLanding.bind(this)}
        >
          <Icon name="back" color="#fff" size={30} />
        </TouchableOpacity>
      );
    }
    if (scene == "Buy") {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={Ctrl.goBackBuy.bind(this)}
        >
          <Icon name="back" color="#fff" size={30} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={Ctrl.goAccount.bind(this)}
      >
        <IconEnt name="menu" color="#fff" size={30} />
      </TouchableOpacity>
    );
  }

  renderRight(scene) {
    if (scene == "Buy" || scene == "ShoppingBag" || scene == "Account") {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text />
        </View>
      );
    }
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={Ctrl.goShoppingBag.bind(this)}
      >
        <Icon name="shoppingcart" color="#fff" size={30} />
      </TouchableOpacity>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    data: store.nav,
    error: store.error
  };
})(Header);
