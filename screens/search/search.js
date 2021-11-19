import React, { useState } from "react";
import { StyleSheet, View, TextInput, Dimensions } from "react-native";
import { EvilIcons } from "react-native-vector-icons";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.searchView}>
      <TextInput
        style={styles.input}
        onChangeText={setSearch}
        placeholder='What are you looking for ?'
      />
      <EvilIcons
        name='search'
        style={styles.searchIcon}
        onPress={() => {
          alert(`You have search for ${search}`);
        }}
      />
    </View>
  );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  input: {
    width: "90%",
    paddingLeft: 10,
    paddingVertical: 8,
  },
  searchView: {
    display: "flex",
    width: width - 15,
    flexDirection: "row",
    marginVertical: 18,
    borderRadius: 4,
    backgroundColor: "white",
  },
  searchIcon: {
    flex: 1,
    display: "flex",
    padding: 8,
    fontSize: 28,
  },
});
