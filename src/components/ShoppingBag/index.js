import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text } from "react-native";

class ShoppingBag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Text>ShoppingBag</Text>
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
    data: store.shopping_bag
  };
})(ShoppingBag);
