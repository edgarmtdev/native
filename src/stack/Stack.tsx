import { createStackNavigator } from "@react-navigation/stack";
import { HomeView } from "../views";
import { Tabs } from "../components/tabs";
import { Drawer } from "../components/drawer";

export const Stack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "#a7e06d" } }}
    >
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen
        name="Subject"
        component={Drawer}
        options={{ title: "Metodos de desarrollo para web" }}
      />
    </Stack.Navigator>
  );
};
