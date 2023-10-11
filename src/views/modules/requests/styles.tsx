import { StyleSheet } from "react-native";

export const styles = (props?: any) => {
    return StyleSheet.create({
      main: {
        display: "flex",
        flexDirection: "column",
        padding: 20,
        gap: 30,
      },
      info: {
        display: "flex",
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
      },
      statusContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
      },
      statusCircle: {
        borderRadius: 999,
        width: 10,
        height: 10,
        backgroundColor: props?.status === "Alive" ? "green" : "red",
      },
      cardContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
      },
      image: {
        width: 200,
        height: 200,
        objectFit: "contain",
        borderRadius: 10,
      }
    });
  };
  