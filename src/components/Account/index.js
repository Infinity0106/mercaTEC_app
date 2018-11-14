import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import * as Ctrl from "./ctrl";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            padding: 20,
            borderBottomColor: "grey",
            borderBottomWidth: 1
          }}
          onPress={Ctrl.goHistory.bind(this)}
        >
          <Text>Order history</Text>
        </TouchableOpacity>
        <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <TouchableOpacity
            style={{
              marginHorizontal: 10,
              marginBottom: 20,
              backgroundColor: "green",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              padding: 10
            }}
            onPress={Ctrl.goLogout.bind(this)}
          >
            <Icon name="logout" size={20} color="white">
              {" "}
              <Text style={{ color: "white" }}>Log out</Text>
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
    user: store.user
  };
})(Account);
