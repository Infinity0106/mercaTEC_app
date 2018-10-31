import React from "react";
import { Provider } from "react-redux";

import { Store } from "./src/store";
import { AppNavigator } from "./src/router";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <AppNavigator />
      </Provider>
    );
  }
}

//0b19deaba079a0eeacab65111c510e89d619594c
