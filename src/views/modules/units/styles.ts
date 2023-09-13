import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  unitsSection: {
    marginTop: 35,
    display: "flex",
    flexDirection: "column",
    gap: 25,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  unit: {
    fontWeight: "600",
    fontSize: 18,
  },
  unitName: {
    fontSize: 16,
  },
});
