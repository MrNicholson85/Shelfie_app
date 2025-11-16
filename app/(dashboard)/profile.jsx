import { StyleSheet } from "react-native";

//Themed Components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const Profile = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.title}>
            Yout Email
            </ThemedText>
            <Spacer />
            <ThemedText>
                Time to start reading com books...
            </ThemedText>
        </ThemedView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
    },
});
