import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconEnt from "react-native-vector-icons/Entypo";
import Toaster from "react-native-toaster";
import Spinner from "react-native-spinkit";

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
        {this.renderLoading()}
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
    if (scene == "History") {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={Ctrl.goAccount.bind(this)}
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
    if (
      scene == "Buy" ||
      scene == "ShoppingBag" ||
      scene == "Account" ||
      scene == "History"
    ) {
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

  renderLoading() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.error.loading}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,.6)",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Loading!</Text>

          <Spinner isVisible={true} size={120} type={"Bounce"} color={"#fff"} />
        </View>
      </Modal>
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
