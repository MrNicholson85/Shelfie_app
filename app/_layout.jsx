import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme(); // Placeholder for color scheme detection
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Shelfie App",
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            headerTitle: "About Shelfie App",
          }}
        />
        <Stack.Screen
          name="contact"
          options={{
            headerTitle: "Contact Shelfie App",
          }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
