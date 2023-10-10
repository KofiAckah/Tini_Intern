import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";

import TabNav from "./Src/components/TabNav";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TabNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#1AB65C",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
