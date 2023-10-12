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
          <Ads imageSource={require("./../../../assets/Images/ads1.png")} />
          <Ads imageSource={require("./../../../assets/Images/ads2.png")} />
          <Ads imageSource={require("./../../../assets/Images/ads3.png")} />
          <Ads imageSource={require("./../../../assets/Images/ads4.png")} />
        </ScrollView>
        <Pickup />
        <Reserve />
        <Text className="m-5 text-lg font-semibold">Promotion campaign</Text>
        <View className="flex-row flex-wrap bg-white">
          <Promotion
            title="Hello World"
            imageSource={require("./../../../assets/icon.png")}
          />
          <Promotion
            title="Hello World"
            imageSource={require("./../../../assets/icon.png")}
          />
          <Promotion
            title="Hello World"
            imageSource={require("./../../../assets/icon.png")}
          />
          <Promotion
            title="Hello World"
            imageSource={require("./../../../assets/icon.png")}
          />
          <Promotion
            title="Hello World"
            imageSource={require("./../../../assets/icon.png")}
          />
          <Promotion
            title="Hello World"
            imageSource={require("./../../../assets/icon.png")}
          />
          <Promotion
            title="Hello World"
            imageSource={require("./../../../assets/icon.png")}
          />
          <Promotion
            title="Hello World"
            imageSource={require("./../../../assets/icon.png")}
          />
          <Promotion
            title="Hello World"
            imageSource={require("./../../../assets/icon.png")}
          />
          <Promotion
            title="Hello World"
            imageSource={require("./../../../assets/icon.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
