import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/native";

export default function HomeScreen() {
  const theme = useTheme(); 

  return (
    <Root>
      <Title>thePractice</Title>
    </Root>
  );
}

const Root = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.background.screen,
}));

const Title = styled.Text(({ theme }) => ({
  fontSize: theme.typography.fontSize.large,
  color: theme.colors.text.primary,
  fontWeight: "bold",
}));