import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

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
        <View style={{ flex: 2 }}>
          <Image source={require("./../../../logo.png")} />
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              margin: 10,
              flex: 1,
              backgroundColor: "red",
              borderRadius: 5
            }}
            onPressIn={Ctrl.goLogin.bind(this)}
          >
            <Text>No manches</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 10,
              flex: 1,
              backgroundColor: "green",
              borderRadius: 10
            }}
          >
            <Text>Si manches</Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(238,238,243)"
  }
});

export default connect(store => {
  return {
    // data: store.nameElementStore
  };
})(OnBoarding);
