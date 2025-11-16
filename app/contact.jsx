import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";
import ThemedText from "../components/ThemedText";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "react-native";

const contact = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ThemedText>Contact Page</ThemedText>

      <Link href="/" style={styles.link}>
        <ThemedText>Go to Home Page</ThemedText>
      </Link>
    </View>
  );
};

export default contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
