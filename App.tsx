import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "./src/stack/Stack";
import { Drawer } from "./src/components/drawer/Drawer";
import "react-native-gesture-handler"

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <Drawer /> */}
        <Stack />
      </NavigationContainer>
    </>
  );
}
