import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Swiper from "./swiper/swiper";
import Search from "../search/search";
import Category from "./category/category";
import Menu from "./menu/menu";
import Ads from "./ads/ads";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Search />
      <ScrollView>
        <Ads />
        <Swiper />
        <Menu name='Shop by Category' />
        <Category nav={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // marginTop: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "800",
    paddingBottom: 20,
  },
});
