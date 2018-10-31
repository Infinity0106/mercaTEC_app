import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Toaster from "react-native-toaster";

import * as Ctrl from "./ctrl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Toaster
          message={this.props.error.text ? this.props.error : null}
          onHide={Ctrl.hideToast.bind(this)}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("./../../../logo.png")}
            style={{ width: 100, height: 100 }}
          />
          <Text>MercaTEC</Text>
        </View>
        <View style={{ flex: 2 }}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              fontSize: 16,
              lineHeight: 20,
              marginHorizontal: 10,
              paddingTop: 30,
              textAlign: "center"
            }}
            placeholder="Email"
            value={this.props.user.email}
            onChangeText={text => Ctrl.changeValue.bind(this, text, "email")()}
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              fontSize: 16,
              lineHeight: 20,
              marginHorizontal: 10,
              paddingTop: 30,
              textAlign: "center"
            }}
            placeholder="Password"
            secureTextEntry
            value={this.props.user.password}
            data_key="password"
            onChangeText={text =>
              Ctrl.changeValue.bind(this, text, "password")()
            }
          />
          <TouchableOpacity
            style={{
              marginHorizontal: 10,
              marginTop: 30,
              padding: 10,
              borderRadius: 20,
              backgroundColor: "green",
              alignItems: "center",
              justifyContent: "center"
            }}
            onPressIn={Ctrl.goLanding.bind(this)}
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
    user: store.user,
    error: store.error
  };
})(Login);