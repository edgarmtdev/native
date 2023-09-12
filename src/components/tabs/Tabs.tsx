import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenView } from "../../views";

export const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Unity 1" component={ScreenView} />
    </Tab.Navigator>
  );
};
