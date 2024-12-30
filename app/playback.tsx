import { useTheme } from "@emotion/react";
import styled from "@emotion/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function PlaybackScreen() {
  const theme = useTheme();
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/");
  };

  return (
    <Container>
      <Title>Minor Pop Asc. 5th</Title>

      <Melody source={require("../assets/images/melody1.png")}/>
    </Container>
  );
}
const Container = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "flex-start",
  paddingBottom: theme.spacing(50),
  backgroundColor: theme.colors.background.screen,
}));

const Title = styled.Text(({ theme }) => ({
  fontSize: 20,
  fontWeight: "bold",
  alignItems: "center",
  justifyContent: "center",
  color: theme.colors.text.secondary,
}));

const Melody = styled.Image({
  width: 250,
  height: 250,
  resizeMode: "contain",
  marginBottom: 5,
});