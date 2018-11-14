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

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <View style={styles.container}>
        {this.props.error.text != "" && (
          <Toaster
            message={this.props.error.text ? this.props.error : null}
            onHide={Ctrl.hideToast.bind(this)}
          />
        )}
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 25,
            left: 0,
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10
          }}
          onPress={Ctrl.goOnboarding.bind(this)}
        >
          <Icon name="back" color="#000" size={30} />
        </TouchableOpacity>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("./../../../logo.png")}
            style={{ width: 100, height: 100 }}
          />
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>MercaTEC</Text>
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
            textContentType="username"
            autoCapitalize="none"
            placeholder="Username"
            value={this.props.user.username}
            onChangeText={text =>
              Ctrl.changeValue.bind(this, text, "username")()
            }
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
            textContentType="emailAddress"
            autoCapitalize="none"
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
            textContentType="password"
            secureTextEntry
            value={this.props.user.password}
            onChangeText={text =>
              Ctrl.changeValue.bind(this, text, "password")()
            }
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
            placeholder="Password Confirmation"
            textContentType="password"
            secureTextEntry
            value={this.props.user.password_confirmation}
            onChangeText={text =>
              Ctrl.changeValue.bind(this, text, "password_confirmation")()
            }
          />
          <TouchableOpacity
            style={{
              marginHorizontal: 10,
              marginTop: 30,
              padding: 10,
              borderRadius: 20,
              backgroundColor: "#21ba45",
              alignItems: "center",
              justifyContent: "center"
            }}
            onPressIn={Ctrl.signup.bind(this)}
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
    user: store.user,
    error: store.error
  };
})(Signup);
