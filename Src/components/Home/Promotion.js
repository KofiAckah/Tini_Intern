import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Promotion = () => {
  return (
    <View className="w-1/2 h-64 overflow-hidden my-3 bg-white p-3">
      <TouchableOpacity>
        <Image
          source={require("./../../../assets/icon.png")}
          className="w-full h-32 rounded-xl"
        />
        <Text className="font-semibold text-base mt-1">
          Discount all w1w2w3w4
        </Text>
        <Text className="font-semibold text-base mt-1">20% in all stores</Text>
        <Text className="text-xs mt-1">20/04/2023 - 06/09/2023</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Promotion;
