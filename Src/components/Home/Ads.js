import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Ads = ({ imageSource }) => {
  return (
    <View className="flex bg-blue-400 ml-5 my-3 h-32 w-72 rounded-2xl overflow-hidden">
      <LinearGradient
        colors={["#68B3F5", "#9FCCF5"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="h-32 w-72 flex-row justify-between items-center px-3"
      >
        <View>
          <Text className="text-white text-xs">20/04 - 06/09</Text>
          <Text className="text-white text-xl font-semibold">
            Special discount
          </Text>
          <Text className="text-white">69% off all products</Text>
        </View>
        <Image source={imageSource} className="h-24 w-24" />
      </LinearGradient>
    </View>
  );
};

export default Ads;

const styles = StyleSheet.create({});
