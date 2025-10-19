import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

const contact = () => {
  return (
    <View>
      <Text>Contact Page</Text>

      <Link href="/" style={styles.link}>
        Go to Home Page
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
