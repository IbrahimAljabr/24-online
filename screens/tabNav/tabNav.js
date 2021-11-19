import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import Home from "../home/home";
import Products from "../products/products";
import ProductDetails from "../ProductDetails/ProductDetails";

//Screen names
const homeName = "HomePage";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const productsStack = createStackNavigator();
const ProductDetailsStack = createStackNavigator();

const HomeScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <productsStack.Screen name='Products' component={Products} options={{ headerShown: false }} />
      <ProductDetailsStack.Screen
        name='ProductDetails'
        component={ProductDetails}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};
const ProductsScreen = () => {
  return (
    <productsStack.Navigator>
      <productsStack.Screen name='Settings' component={Products} options={{ headerShown: false }} />
    </productsStack.Navigator>
  );
};

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "list" : "list-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#cc1d1d",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 5, fontSize: 9 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        {/* <Tab.Screen name={settingsName} component={ProductsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
