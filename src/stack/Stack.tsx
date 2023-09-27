import { createStackNavigator } from "@react-navigation/stack";
import { HomeView } from "../views";
import { Drawer } from "../components/drawer";

export const Stack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "#85c345" } }}
    >
      <Stack.Screen name="Home" component={HomeView} options={{
        title: 'Inicio'
      }} />
      <Stack.Screen
        name="Subject"
        component={Drawer}
        options={{ title: "Metodos de desarrollo para web" }}
      />
    </Stack.Navigator>
  );
};
