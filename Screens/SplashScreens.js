import { Animated, Easing, View, Image, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";

import LottieView from "lottie-react-native";

export default function SplashScreens() {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, 2000);
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/birdSplash.json")} // Replace with your animation JSON file
        autoPlay
        loop={true}
        resizeMode="cover"
        onAnimationFinish={() => setLoading(false)}
      />
      {show && <Text style={styles.splashHead}>FEELIŃ</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  splashHead: {
    fontSize: 50,
    fontWeight: "900",
    color: "white",
    fontFamily: "Futura",
    transform: [{ translateX: -10 }, { translateY: -70 }],
  },
});
