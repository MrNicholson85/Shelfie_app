import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";

import Logo from "../assets/img/logo_light.png";

import ThemedView from "../components/ThemedView";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>Home Page</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>
        Welcome to Shelfie App!
      </Text>
      <Link href="/about" style={styles.link}>
        Go to About Page
      </Link>
      <Link href="/contact" style={styles.link}>
        Go to Contact Page
      </Link>
    </ThemedView>
  );
};

export default Home;

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
  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
