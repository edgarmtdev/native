import { Text, View } from "react-native";
import { UNITS } from "./model";
import { styles } from "./styles";

export const UnitsView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contenidos del curso</Text>
      <View style={styles.unitsSection}>
        {UNITS.map(({ id, name }) => (
          <View key={id} style={styles.card}>
            <Text style={styles.unit}>Unidad {id}</Text>
            <Text>{name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
