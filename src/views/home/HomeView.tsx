import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../config";

export const HomeView = () => {
  const navigation: { navigate: (str: string) => void } = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://aula10.utel.edu.mx/pluginfile.php/1/theme_moove/logo/1687391845/logo-utel-01-mini.png",
        }}
        style={{
          width: 200,
          height: 200,
          objectFit: "contain",
        }}
      />
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
    gap: 40,
  },
  title: { fontSize: 28, textAlign: "center" },
  button: {
    margin: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#272C33",
    borderRadius: 4,
  },
});
