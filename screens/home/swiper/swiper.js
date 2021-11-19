import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swiper from "react-native-swiper";
import img1 from "../../../assets/swiper/img1.jpg";
import img2 from "../../../assets/swiper/img2.jpg";
import img3 from "../../../assets/swiper/img3.jpg";
import img4 from "../../../assets/swiper/img4.jpg";
import img5 from "../../../assets/swiper/img5.jpg";
import img6 from "../../../assets/swiper/img6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function App() {
  return (
    <View style={styles.swiper}>
      <Swiper
        autoplay={true}
        autoplayTimeout={4}
        activeDotStyle={{
          backgroundColor: "gray",
          borderWidth: 0.5,
          borderColor: "white",
          padding: 4,
        }}
        dotStyle={{
          backgroundColor: "white",
          borderWidth: 0.5,
          borderColor: "gray",
        }}
        paginationStyle={{ marginBottom: 10 }}
        // showsPagination={false}
      >
        {images.map((image, index) => {
          return (
            <TouchableHighlight
              onPress={() => {
                alert(`you pressed image number ${index + 1}`);
              }}
              key={index}
              style={styles.slide}
            >
              <Image resizeMode='stretch' style={styles.image} source={image} />
            </TouchableHighlight>
          );
        })}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  swiper: { height: 230 },
  slide: {
    display: "flex",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
