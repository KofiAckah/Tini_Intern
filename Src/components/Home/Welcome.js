import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Welcome = () => {
  return (
    <View className="flex-row mt-5 mx-5 justify-between items-start">
      <View className="flex-row items-center">
        <View>
          <Image
            source={require("./../../../assets/icon.png")}
            className="w-10 h-10"
          />
        </View>
        <View className="ml-4">
          <Text className="">Welcome to</Text>
          <Text className="font-semibold">Sample restaurant</Text>
        </View>
      </View>
      <View className="bg-gray-300 flex-row p-1 rounded-xl">
        <MaterialCommunityIcons name="dots-horizontal" size={20} />
        <Text className="mx-2 text-gray-500">I</Text>
        <MaterialCommunityIcons name="close-circle-outline" size={20} />
      </View>
    </View>
  );
};

export default Welcome;
