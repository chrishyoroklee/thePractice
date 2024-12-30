import { useTheme } from "@emotion/react";
import styled from "@emotion/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <Root>
      <LogoContainer>
        <Logo source={require("../assets/images/icon.png")} />
      </LogoContainer>
      <CreateNewContainer>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <CreateNewText>Create New</CreateNewText>
          <Ionicons
            name="add-circle-outline"
            size={24}
            color={theme.colors.button.primary}
          />
        </TouchableOpacity>
      </CreateNewContainer>
    </Root>
  );
}

const Root = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: "flex-start",
  justifyContent: "space-between",
  backgroundColor: theme.colors.background.screen,
  paddingVertical: theme.spacing(30),
}));

const LogoContainer = styled.View({
  alignItems: "flex-start",
});

const Logo = styled.Image({
  width: 250,
  height: 250,
  resizeMode: "contain",
  marginBottom: 10,
});

const CreateNewContainer = styled.View({
  alignItems: "center",
  marginBottom: 200,
});

const CreateNewText = styled.Text(({ theme }) => ({
  padding: theme.spacing(2),
  fontSize: 18,
  fontWeight: "bold",
  color: theme.colors.text.secondary,
  marginRight: 10, // Space between the text and the icon
}));
