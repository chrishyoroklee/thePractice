import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      {/* This ensures that the correct screen renders */}
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});