import React, { useState, useEffect } from "react";
import superagent from "superagent";

import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Dimensions, Image, TouchableWithoutFeedback, Text } from "react-native";
import { setProducts } from "../../../redux/actions";
import Products from "../../products/products";

// images
import man from "../../../assets/homeCategory/man.png";
import woman from "../../../assets/homeCategory/woman.png";
import ele from "../../../assets/homeCategory/ele.png";
import jew from "../../../assets/homeCategory/jew.png";

const category = {
  images: [man, woman, ele, jew],
  names: ["Men", "Women", "Electronics", "Jewelery"],
  category: ["men's clothing", "women's clothing", "electronics", "jewelery"],
};

export default function App({ nav }) {
  const [categoryName, setCategoryName] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts([]));
    fetchData();
  }, [categoryName]);
  const fetchData = () => {
    superagent
      .get(`https://fakestoreapi.com/products/category/${category.category[categoryName]}`)
      .then((results) => {
        dispatch(setProducts(results.body));
      });
  };

  return (
    <View style={styles.category}>
      {category.images.map((image, index) => {
        return (
          <TouchableWithoutFeedback
            onPress={() => {
              setCategoryName(index);
              nav.push("Products");
            }}
            key={index}
          >
            <View style={styles.touchable}>
              <View style={styles.viewImage}>
                <Image resizeMode='stretch' style={styles.image} source={image} />
              </View>
              <Text>{category.names[index]}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  touchable: {
    display: "flex",
    alignItems: "center",
  },
  category: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: width - 15,
    marginVertical: 30,
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: "lightgray",
  },
  viewImage: {
    borderRadius: 50,
    backgroundColor: "lightgray",
    padding: 18,
    marginBottom: 5,
  },
});
