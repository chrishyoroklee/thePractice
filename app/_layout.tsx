import React from "react";
import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import { ThemeProvider } from "@emotion/react"; 
import theme from "../theme/theme"; 

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        {/* Render child screens */}
        <Slot />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});