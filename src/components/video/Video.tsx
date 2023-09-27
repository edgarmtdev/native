import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";

export function VideoComponent() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <Video
      ref={video}
      style={styles.video}
      source={{
        uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      }}
      useNativeControls
      resizeMode={ResizeMode.CONTAIN}
      isLooping
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    marginTop: 40,
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
