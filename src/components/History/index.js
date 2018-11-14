import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import moment from "moment";

import * as Ctrl from "./ctrl";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    Ctrl.getHistory.bind(this)();
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          extraData={this.props.history.items}
          data={this.props.history.items}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", paddingVertical: 10 }}>
              <View style={{ flex: 2, backgroundColor: "#262626" }}>
                <Image
                  source={{ uri: item.product.images[0].path }}
                  style={{ width: "100%", height: 100 }}
                />
              </View>
              <View style={{ flex: 3, paddingLeft: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.product.name}
                </Text>
                <Text numberOfLines={1}>
                  {moment(item.createdAt).format("DD-MMM-YYYY")}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text>${item.total}</Text>
              </View>
            </View>
          )}
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
    backgroundColor: "rgb(238,238,243)"
  }
});

export default connect(store => {
  return {
    history: store.history
  };
})(History);
