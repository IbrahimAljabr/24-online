import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigator from "./screens/tabNav/tabNav";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style='dark' />
        <Navigator />
      </Provider>
    </>
  );
}
