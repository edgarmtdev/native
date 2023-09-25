import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import { UnitsView } from "../../views";
import { WelcomeView } from "../../views/modules/welcome";

export const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Bienvenidos"
        component={WelcomeView}
        options={{
          tabBarLabel: "Introduction",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="bars" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Unidades"
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
