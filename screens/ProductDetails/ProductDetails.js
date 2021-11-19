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
import { useSelector } from "react-redux";
import { setProduct, setCategory } from "../../redux/actions";
import image from "../../assets/loading/loading.gif";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App({ navigation }) {
  const product = useSelector((state) => state.product.product);
  console.log("🚀🚀🚀 ~~~~ App ~~~~ product", product);

  if (product) {
    return (
      <View style={styles.container}>
        {/* <Search /> */}
        <ScrollView>
          <View style={styles.view}>
            <View style={styles.productImage}>
              <Image resizeMode='stretch' style={styles.image} source={{ uri: product.image }} />
            </View>
            <View>
              <Text style={styles.text}> {product.title}</Text>
              <Text style={styles.price}>$ {product.price}</Text>
              <Text style={styles.text}>Description:</Text>
              <Text style={styles.description}> {product.description}</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                alert("Added to Cart");
                // navigation.navigate("Home");
              }}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  <Ionicons name='cart' size={24} />
                  <Text> Add to Cart</Text>
                </Text>
              </View>
            </TouchableWithoutFeedback>
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
    // backgroundColor: "white",
  },
  loading: { flex: 1 },
  view: {
    width: width,
    backgroundColor: "white",
    paddingVertical: 40,
  },
  description: {
    paddingHorizontal: "4%",
    color: "gray",
  },

  text: {
    fontSize: 18,
    padding: 10,
  },
  productImage: {
    width: width,
    height: width,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width / 1.5,
    height: width / 1.2,
  },
  price: {
    padding: 20,
    fontSize: 25,
    fontWeight: "800",
  },
  buttonText: {
    width: width / 1.1,
    backgroundColor: "#222222",
    marginVertical: 25,
    paddingVertical: 10,
    color: "#eeeeee",
    fontSize: 24,
    textAlign: "center",
    paddingRight: 20,
  },
  button: {
    display: "flex",
    alignItems: "center",
  },
});
