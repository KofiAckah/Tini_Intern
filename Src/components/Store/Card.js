import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Card = ({ title, address, color }) => {
  return (
    <TouchableOpacity>
      <View className="bg-white mx-5 my-2 rounded-xl flex-row p-2 items-center">
        <MaterialCommunityIcons name="storefront" size={30} color="gray" />
        <View className="mx-2">
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-gray-500">{address}</Text>
        </View>
        <MaterialCommunityIcons name="heart" size={30} color={color} />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({});
