import { createStackNavigator } from "@react-navigation/stack";
import { HomeView } from "../views";
import { Tabs } from "../components/tabs";

export const Stack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen
        name="Subject"
        component={Tabs}
        options={{ title: "Metodos de desarrollo para web" }}
      />
    </Stack.Navigator>
  );
};
