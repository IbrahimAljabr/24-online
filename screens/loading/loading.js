import React from "react";
import { StyleSheet, View, Image } from "react-native";
import image from "../../../assets/loading/loading.gif";

export default function App() {
  return (
    <View style={styles.loading}>
      <Image resizeMode='stretch' style={styles.image} source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  // image: { height: 250, width: 250 },
});
