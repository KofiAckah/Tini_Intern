import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Pickup = () => {
  return (
    <View className="bg-white w-11/12 mx-auto flex-row justify-between p-6 rounded-xl">
      <View className="items-center">
        <Image
          source={require("./../../../assets/icon.png")}
          className="w-32 h-28"
        />
        <Text className="text-xl font-semibold">Store pickup</Text>
        <Text className="text-gray-400">Best quality</Text>
      </View>
      <View className="items-center">
        <Image
          source={require("./../../../assets/icon.png")}
          className="w-32 h-28"
        />
        <Text className="text-xl font-semibold">Delivery</Text>
        <Text className="text-gray-400">Always on Time</Text>
      </View>
    </View>
  );
};

export default Pickup;

const styles = StyleSheet.create({});
