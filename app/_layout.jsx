import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../contexts/UserContext";

const RootLayout = () => {
  const colorScheme = useColorScheme(); // Placeholder for color scheme detection
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <UserProvider>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
      <Stack.Screen name="(auth)" options={{ headerShown: false, animation: 'none' }} />
      <Stack.Screen name="(dashboard)" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Shelfie App",
          }}
        />
        
      </Stack>
    </UserProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
