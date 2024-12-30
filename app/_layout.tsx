import React from "react";
import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import { ThemeProvider } from "@emotion/react";
import themes from "../theme/theme";
import { useColorScheme } from "react-native"; // For detecting system dark/light mode

export default function RootLayout() {
  // Detect the system's color scheme (light or dark)
  const colorScheme = useColorScheme();

  // Dynamically select the theme based on the color scheme
  const selectedTheme =
    colorScheme === "dark" ? themes.DARK_THEME : themes.LIGHT_THEME;

  return (
    <ThemeProvider theme={selectedTheme}>
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
