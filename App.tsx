import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "./src/stack/Stack";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
