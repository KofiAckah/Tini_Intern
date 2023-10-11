import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

const Profile = () => {
  return (
    <View className="flex-1 bg-gray-200">
      {/* Image */}
      <View>
        <Image
          source={require("./../../assets/icon.png")}
          className="w-full h-32"
        />
        <View className="bg-gray-300 flex-row p-1 rounded-xl absolute top-3 left-3/4">
          <MaterialCommunityIcons name="dots-horizontal" size={20} />
          <Text className="mx-2 text-gray-500">I</Text>
          <MaterialCommunityIcons name="close-circle-outline" size={20} />
        </View>
        <LinearGradient
          colors={["#ffffff60", "#00000080"]}
          className="h-16 w-full flex-row justify-between items-center px-3 relative bottom-16"
        ></LinearGradient>
      </View>
      <View className="overflow-hidden w-28 h-28 bg-red-500 rounded-full border-2 border-white relative mx-auto bottom-32">
        <Image
          source={require("./../../assets/icon.png")}
          className="w-28 h-28"
        />
      </View>
      <Text className="text-xl font-bold mx-auto relative bottom-28">
        User Name
      </Text>
      <View className="w-11/12 mx-auto relative bottom-24 h-40 rounded-lg overflow-hidden">
        <Image
          source={require("./../../assets/icon.png")}
          className="w-full h-full rounded-lg"
        />
        <View className="ml-5 relative bottom-36">
          <Text className="text-base">Hello</Text>
          <Text className="text-xl">Username</Text>
          <View className="flex-row justify-between mr-5 mt-12 items-end">
            <Text>Join Date:01/01/2023</Text>
            <Text className="text-xl font-semibold">420 points</Text>
          </View>
        </View>
      </View>
      <View className="bg-white w-11/12 mx-auto relative bottom-20 h-32 rounded-lg overflow-hidden">
        <Image
          source={require("./../../assets/icon.png")}
          className="w-10/12 h-20 mx-auto mt-4"
        />
        <Text className="mx-auto mt-1">42773-38384-84929</Text>
      </View>
      <TouchableOpacity>
        <View className="bg-white w-11/12 mx-auto relative bottom-16 h-16 rounded-lg overflow-hidden flex-row justify-between p-4">
          <View className="flex-row">
            <MaterialCommunityIcons
              name="headphones"
              size={30}
              color="#68B3F5"
            />
            <View className="ml-4 -mt-1">
              <Text className="text-base">Support</Text>
              <Text className="text-gray-600">Call or chat with us</Text>
            </View>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={30} />
        </View>
      </TouchableOpacity>
      <View className="mx-auto relative bottom-10">
        <Text className="text-primary-100 underline font-bold">
          Terms and Conditions
        </Text>
        <Text className="text-center text-gray-500 mt-4">version 1.0.0</Text>
      </View>
    </View>
  );
};

export default Profile;

// 1) background-image: linear-gradient(45deg, rgba(0,0,0,0.5), rgba(0,0,255,0.6))
// 2) background-image: linear-gradient(45deg, rgba(0,0,0,0.5) 30%, rgba(0,0,255,0.6) 40%)
