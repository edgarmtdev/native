import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../config";

export const HomeView = () => {
  const navigation: { navigate: (str: string) => void } = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Métodos de desarrollo para web</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(routes.viewContent)}
      >
        <Text style={{ color: "#fff" }}>Ir a la Materia</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  title: { fontSize: 32, textAlign: "center" },
  button: {
    margin: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#000",
    borderRadius: 4,
  },
});
