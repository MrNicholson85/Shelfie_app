import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";

import Logo from "../assets/img/logo_light.png";

import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Spacer height={20} />
      <ThemedText style={styles.title}>Home Page</ThemedText>

      <Spacer height={10}/>
      <ThemedText style={styles.title} title={true}>
        Welcome to Shelfie App!
      </ThemedText>
      <Spacer/>
      <Link href="/about" style={styles.link}>
        <ThemedText>Go to About Page</ThemedText>
      </Link>
      <Link href="/contact" style={styles.link}>
        <ThemedText>Go to Contact Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

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
