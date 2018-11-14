import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import * as Ctrl from "./ctrl";

class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("./../../../logo.png")}
            style={{ width: 100, height: 100 }}
          />
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>MercaTEC</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              margin: 10,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#21ba45",
              borderRadius: 30
            }}
            onPressIn={Ctrl.goLogin.bind(this)}
          >
            <Icon name="login" color="#fff" size={18}>
              {" "}
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 18 }}
              >
                Login
              </Text>
            </Icon>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 10,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#2f3032",
              borderRadius: 30
            }}
            onPress={Ctrl.goSignUp.bind(this)}
          >
            <Icon name="user" color="#fff" size={18}>
              {" "}
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 18 }}
              >
                Signup
              </Text>
            </Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(238,238,243)"
  }
});

export default connect(store => {
  return {
    // data: store.nameElementStore
  };
})(OnBoarding);
