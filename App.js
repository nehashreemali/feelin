import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import SplashScreens from "./Screens/SplashScreens";

export default function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 4000);
  return (
    <View style={styles.container}>
      {loading ? <SplashScreens /> : <Home />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
