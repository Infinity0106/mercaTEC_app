import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

import * as Ctrl from "./ctrl";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    if (this.scanner && this.props.landing.status) {
      this.scanner.reactivate();
    }
    return (
      <View style={styles.container}>
        <QRCodeScanner
          ref={node => {
            this.scanner = node;
          }}
          onRead={Ctrl.detectQR.bind(this)}
          containerStyle={{ backgroundColor: "#262626" }}
        />
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
    user: store.user,
    landing: store.landing
  };
})(Landing);
