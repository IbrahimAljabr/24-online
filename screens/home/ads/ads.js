import React from "react";
import { StyleSheet, View, Image } from "react-native";
import sale from "../../../assets/ads/ad1.gif";

export default function App() {
  return (
    <View style={styles.view}>
      <Image resizeMode='stretch' style={styles.image} source={sale} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 180,
    marginBottom: 35,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
