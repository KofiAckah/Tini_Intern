import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Order = () => {
  const [isText1Selected, setIsText1Selected] = useState(true);
  const [isText2Selected, setIsText2Selected] = useState(false);

  const handleText1Press = () => {
    setIsText1Selected(true);
    setIsText2Selected(false);
  };

  const handleText2Press = () => {
    setIsText1Selected(false);
    setIsText2Selected(true);
  };

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
      <View className="flex-row">
        <Text
          style={[styles.text, isText1Selected && styles.selectedText]}
          onPress={handleText1Press}
        >
          Store pickup
        </Text>
        <Text
          style={[styles.text, isText2Selected && styles.selectedText]}
          onPress={handleText2Press}
        >
          Delivery
        </Text>
      </View>
      <Image
        source={require("../../assets/icon.png")}
        className="w-full h-56 mt-10"
      />
      <Text className="mx-auto text-xl mt-5 font-semibold">
        You have no order
      </Text>
      <Text className="mx-auto text-base mt-2">
        How about trying our new drinks?
      </Text>
      <Text className="mx-auto text-lg font-medium mt-2 bg-primary-100 text-white w-10/12 text-center p-3 rounded-full">
        Order now!
      </Text>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    height: 40,
    width: "50%",
    textAlign: "center",
    textAlignVertical: "center",
    paddingBottom: 10,
    borderBottomColor: "#00000030",
    borderBottomWidth: 2,
  },
  selectedText: {
    color: "#68B3F5",
    borderBottomColor: "#68B3F5",
    borderBottomWidth: 2,
  },
});
