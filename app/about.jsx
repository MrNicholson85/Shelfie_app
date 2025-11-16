import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { Colors } from "../constants/Colors";
import ThemedText from "../components/ThemedText";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ThemedText style={styles.title}>About</ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>Go to Home Page</ThemedText>
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
