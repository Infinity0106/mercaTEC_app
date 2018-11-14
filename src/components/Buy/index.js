import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import Spinner from "react-native-spinkit";
import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/AntDesign";

import * as Ctrl from "./ctrl";

const width = Dimensions.get("window").width;

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    Ctrl.getProduct.bind(this)();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.error.loading && (
          <Spinner isVisible size={100} type={"Bounce"} color={"#262626"} />
        )}
        {!this.props.error.loading && (
          <>
            <View style={{ flex: 1 }}>
              <Carousel
                autoplay
                data={this.props.product.images}
                renderItem={this.renderImage}
                sliderWidth={width * this.props.product.images.length}
                itemWidth={width}
              />
            </View>
            <View
              style={{
                flex: 2,
                alignSelf: "stretch",
                marginHorizontal: 10,
                marginTop: 10
              }}
            >
              <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <View style={{ flex: 2 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#262626",
                      fontSize: 20
                    }}
                  >
                    {this.props.product.name}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      textAlign: "right"
                    }}
                  >
                    ${this.props.product.price}
                  </Text>
                </View>
              </View>
              <Text style={{ fontSize: 16 }}>
                {this.props.product.description}
              </Text>
            </View>
            <View
              style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
            >
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
                onPress={Ctrl.addToCart.bind(this)}
              >
                <Icon name="pluscircleo" size={20} color="white">
                  {" "}
                  <Text style={{ color: "white" }}>Add to cart</Text>
                </Icon>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    );
  }
  renderImage({ item, index }) {
    return (
      <View style={{ flex: 1, backgroundColor: "#262626" }}>
        <Image
          source={{ uri: item.path }}
          style={{ width: "100%", height: "100%" }}
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
    product: store.product,
    error: store.error
  };
})(Buy);
