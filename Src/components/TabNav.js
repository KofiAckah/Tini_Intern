import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./../screen/Home";
import Stores from "./../screen/Stores";
import Order from "./../screen/Order";
import Profile from "./../screen/Profile";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Home}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Stores") {
              iconName = focused ? "storefront" : "storefront-outline";
            } else if (route.name === "Order") {
              iconName = focused ? "text-box" : "text-box-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "account" : "account-outline";
            }
            return (
              <MaterialCommunityIcons name={iconName} size={30} color={color} />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Stores" component={Stores} />
        <Tab.Screen name="Order" component={Order} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
