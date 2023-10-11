import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Component
import Card from "../components/Store/Card";

const Stores = () => {
  return (
    <View className="flex-1">
      <ScrollView>
        <View className="bg-white pb-3">
          <View className="flex-row justify-between items-center mx-5 mt-5">
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="chevron-left" size={30} />
              <Text className="text-xl font-bold">Select store</Text>
            </View>
            <View className="bg-gray-300 flex-row p-1 rounded-xl">
              <MaterialCommunityIcons name="dots-horizontal" size={20} />
              <Text className="mx-2 text-gray-500">I</Text>
              <MaterialCommunityIcons name="close-circle-outline" size={20} />
            </View>
          </View>
          <View className="flex-row items-center">
            <TextInput
              placeholder="Search store"
              className="border-gray-200 border-2 mx-auto my-3 p-3 pl-9 w-11/12 text-lg"
            />
            <View className="absolute top-6 left-5">
              <MaterialCommunityIcons name="magnify" size={30} color="gray" />
            </View>
          </View>
        </View>
        <Text className="text-lg ml-5 mt-5 font-bold">Favorites stores</Text>
        <Card
          title="The longest Name Here"
          address="The Address have to longer than the name"
          color="#1881Ff"
        />
        <Card
          title="The longest Name Here"
          address="The Address have to longer than the name"
          color="#1881Ff"
        />
        <Card
          title="The longest Name Here"
          address="The Address have to longer than the name"
          color="#1881Ff"
        />
        <Card
          title="The longest Name Here"
          address="The Address have to longer than the name"
          color="#1881Ff"
        />
        <Text className="text-lg ml-5 mt-5 font-bold">Other stores</Text>
        <Card
          title="The longest Name Here"
          address="The Address have to longer than the name"
          color="white"
        />
        <Card
          title="The longest Name Here"
          address="The Address have to longer than the name"
          color="white"
        />
        <Card
          title="The longest Name Here"
          address="The Address have to longer than the name"
          color="white"
        />
        <Card
          title="The longest Name Here"
          address="The Address have to longer than the name"
          color="white"
        />
        <Card
          title="The longest Name Here"
          address="The Address have to longer than the name"
          color="white"
        />
      </ScrollView>
    </View>
  );
};

export default Stores;

const styles = StyleSheet.create({});
