import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App(props) {
  return (
    <View style={styles.viewText}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cc1d1d",
    paddingVertical: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
