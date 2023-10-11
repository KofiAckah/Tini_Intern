import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

//components
import Welcome from "./Welcome";
import Ads from "./Ads";
import Pickup from "./Pickup";
import Reserve from "./Reserve";
import Promotion from "./Promotion";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView>
        <Welcome />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Ads imageSource={require("./../../../assets/icon.png")} />
          <Ads imageSource={require("./../../../assets/icon.png")} />
          <Ads imageSource={require("./../../../assets/icon.png")} />
          <Ads imageSource={require("./../../../assets/icon.png")} />
        </ScrollView>
        <Pickup />
        <Reserve />
        <Text className="m-5 text-lg font-semibold">Promotion campaign</Text>
        <View className="flex-row flex-wrap bg-white">
          <Promotion />
          <Promotion />
          <Promotion />
          <Promotion />
          <Promotion />
          <Promotion />
          <Promotion />
          <Promotion />
          <Promotion />
          <Promotion />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
