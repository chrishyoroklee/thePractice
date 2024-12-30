import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@emotion/react";
import styled from "@emotion/native";

export default function PlaybackScreen() {
  const theme = useTheme();
  return (
    <Container>
      <Title>Playback Page</Title>
    </Container>
  );
}
const Container = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.colors.background.screen,
}));

const Title = styled.Text(({ theme }) => ({
  fontSize: 30,
  fontWeight: "bold",
  alignItems: "center",
  justifyContent: "center",
  color: theme.colors.text.secondary,
}));
