import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import SplashScreens from "./Screens/SplashScreens";

export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 4000);
  return (
    <View style={styles.container}>
      {loading ? <SplashScreens /> : <Register />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
