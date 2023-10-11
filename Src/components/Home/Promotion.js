import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Promotion = ({ imageSource, title }) => {
  return (
    <View className="w-1/2 h-64 overflow-hidden my-3 bg-white p-3">
      <TouchableOpacity>
        <Image source={imageSource} className="w-full h-32 rounded-xl" />
        <View className="bg-primary-100 rounded-full relative bottom-28 w-12 h-12 items-center justify-center p-1 left-2/3">
          <Text className="text-white font-bold text-base">-20%</Text>
        </View>
        <Text className="font-semibold text-base -mt-10">
          Discount all {title}
        </Text>
        <Text className="font-semibold text-base mt-1">20% in all stores</Text>
        <Text className="text-xs mt-1">20/04/2023 - 06/09/2023</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Promotion;
