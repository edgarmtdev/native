import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Images</Text>
      <Image
        source={{ uri: "https://picsum.photos/200/200" }}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => Alert.alert("Nice!!")}
        style={styles.button}
      >
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  title: { color: "#fff", fontSize: 32 },
  image: { width: 200, height: 200 },
  button: {
    margin: 10,
    padding: 6,
    backgroundColor: "white",
    borderRadius: 999,
  },
});
