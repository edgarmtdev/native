import React from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const HomeView = () => {
  const navigation: { navigate: (str: string) => void } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Este es el home 1</Text>
      <Button
        title="Go to units"
        onPress={() => navigation.navigate('Units')}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    paddingTop: 50
  },
  title: { color: "#fff", fontSize: 32 },
  image: { width: 200, height: 200 },
  button: {
    margin: 10,
    padding: 6,
    backgroundColor: "white",
    borderRadius: 4,
  },
});
