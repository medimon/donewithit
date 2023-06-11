import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Picker from "./src/components/picker";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your appAA!</Text>
      <StatusBar style="auto" />
      <Picker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
