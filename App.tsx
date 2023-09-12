import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "./src/components/tabs";
import { Stack } from "./src/stack/Stack";

export default function App() {
  return <NavigationContainer>
     <Stack />
  </NavigationContainer>;
}