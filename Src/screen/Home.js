import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import HomeScreen from "./../components/Home/HomeScreen";

const Home = () => {
  return (
    <Stack.Navigator
      initialRouteName={HomeScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
