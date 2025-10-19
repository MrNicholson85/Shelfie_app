import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f4511e" },
        headerTintColor: "#fff",
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
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
