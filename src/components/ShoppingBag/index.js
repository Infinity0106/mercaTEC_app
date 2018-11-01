import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Swipeout from "react-native-swipeout";

import * as Ctrl from "./ctrl";

class ShoppingBag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    Ctrl.getShoppingBag.bind(this)();
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1, marginBottom: 120 }}
          extraData={this.props.shopping_bag.items}
          data={this.props.shopping_bag.items}
          renderItem={({ item }) => (
            <Swipeout
              key={item.id}
              autoClose
              buttonWidth={100}
              right={[
                {
                  component: (
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1
                      }}
                    >
                      <Icon name="delete" color="#fff" size={20}>
                        {" "}
                        <Text style={{ color: "white" }}>Delete</Text>
                      </Icon>
                    </View>
                  ),
                  onPress: Ctrl.deleteItem.bind(this, item.id),
                  backgroundColor: "red"
                }
              ]}
            >
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
                  <Text numberOfLines={1}>{item.product.description}</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text>${item.product.price}</Text>
                </View>
              </View>
            </Swipeout>
          )}
        />
        <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <Text
            style={{
              textAlign: "right",
              fontWeight: "bold",
              fontSize: 20,
              paddingBottom: 20,
              paddingRight: 20
            }}
          >
            Total: $
            {this.props.shopping_bag.total
              ? this.props.shopping_bag.total
              : "0.00"}
          </Text>
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
            onPress={Ctrl.goCheckout.bind(this)}
          >
            <Icon name="creditcard" size={20} color="white">
              {" "}
              <Text style={{ color: "white" }}>Checkout</Text>
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
    shopping_bag: store.shopping_bag
  };
})(ShoppingBag);
