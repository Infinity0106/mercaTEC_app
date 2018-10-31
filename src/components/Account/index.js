import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text } from "react-native";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Text>Account</Text>
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
