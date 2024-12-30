import { View, Text, StyleSheet, Button } from 'react-native'
import { useRouter } from "expo-router"

const HomeScreen = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to The Practice!</Text>
          <Button
            title="Start practicing"
            onPress={() => router.push("/practice")}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    }
});

export default HomeScreen;