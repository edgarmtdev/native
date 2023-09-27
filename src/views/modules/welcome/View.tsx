import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { routes } from "../../../config";

export const WelcomeView = () => {
  const navigation: { navigate: (str: string) => void } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Métodos de desarrollo para web es una materia en donde se busca
        comprender a fondo los procesos en el desarrollo de software,
        especificamente en el entorno de la web y sus derivados como los son las
        aplicaciones móviles
      </Text>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        }}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(routes.units)}
      >
        <Text style={{ color: "#fff" }}>Ir al contenido</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  welcomeText: {
    fontSize: 18,
  },
  image: { marginTop: 50, alignSelf: "center", width: 320, height: 200 },
  button: {
    marginTop: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#272C33",
    borderRadius: 4,
  },
});
