import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UnitsView } from "../../views";
import AntDesign from "react-native-vector-icons/AntDesign";
import { WelcomeView } from "../../views/modules/welcome";

export const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Welcome"
        component={WelcomeView}
        options={{
          tabBarLabel: "Introduction",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="bars" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Units"
        component={UnitsView}
        options={{
          tabBarLabel: "Unidades",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="filetext1" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
