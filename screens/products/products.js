import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Search from "../search/search";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../../redux/actions";
import image from "../../assets/loading/loading.gif";

export default function App({ navigation }) {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const getProduct = () => {};

  if (products) {
    return (
      <View style={styles.container}>
        {/* <Search /> */}
        <ScrollView>
          <View style={styles.view}>
            {products.map((product, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => {
                    dispatch(setProduct(product));
                    navigation.push("ProductDetails");
                  }}
                >
                  <View style={styles.productView}>
                    <Image
                      resizeMode='stretch'
                      style={styles.productImage}
                      source={{ uri: product.image }}
                    />

                    <Text style={styles.text}>$ {product.price}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.loading}>
        <Image resizeMode='stretch' style={styles.image} source={image} />
      </View>
    );
  }
}
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  view: {
    width: width,
    marginBottom: 40,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  productView: {
    padding: "2%",
    borderColor: "lightgray",
    // borderWidth: 1,
    borderRadius: 3,
    margin: 10,
  },
  loading: { flex: 1 },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
  },
  productImage: {
    width: width / 2.5,
    height: width / 1.8,
  },
});
