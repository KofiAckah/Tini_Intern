import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Order = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-between m-5 items-center">
        <Text className="text-xl font-bold">Orders</Text>
        <View className="flex-row items-center">
          <MaterialCommunityIcons name="clock" size={30} />
          <View className="bg-gray-300 flex-row p-1 rounded-xl ml-3">
            <MaterialCommunityIcons name="dots-horizontal" size={20} />
            <Text className="mx-2 text-gray-500">I</Text>
            <MaterialCommunityIcons name="close-circle-outline" size={20} />
          </View>
        </View>
      </View>
      <View>
        <Text>Store pickup</Text>
        <Text>Delivery</Text>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
