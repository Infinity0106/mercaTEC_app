import React from "react";
import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

import Header from "./components/Header";
import OnBoarding from "./components/OnBoarding";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Account from "./components/Account";
import Buy from "./components/Buy";
import ShoppingBag from "./components/ShoppingBag";

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const LandingChild = createStackNavigator(
  {
    Landing: {
      screen: Landing
    },
    Buy: {
      screen: Buy
    }
  },
  {
    headerMode: "none",
    initialRouteName: "Landing"
  }
);

const LandingStack = createStackNavigator(
  {
    LandingChild: {
      screen: LandingChild
    },
    Account: {
      screen: Account
    },
    ShoppingBag: {
      screen: ShoppingBag
    }
  },
  {
    navigationOptions: {
      header: ({ navigation }) => <Header navigation={navigation} />
    },
    initialRouteName: "LandingChild"
  }
);

const RootNavigator = createStackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding
    },
    Login: {
      screen: Login
    },
    LandingStack: {
      screen: LandingStack
    }
  },
  {
    headerMode: "none",
    initialRouteName: "OnBoarding"
  }
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, "root");

const AppNavigator = connect(state => {
  return {
    state: state.nav
  };
})(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
