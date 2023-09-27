import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { WelcomeView } from "../../views/modules/welcome";
import { UnitsView } from "../../views";

export const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Bienvenidos"
        component={WelcomeView}
        options={{
          drawerActiveTintColor: "#85c345",
        }}
      />
      <Drawer.Screen
        name="Unidades"
        component={UnitsView}
        options={{
          drawerActiveTintColor: "#85c345",
        }}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
