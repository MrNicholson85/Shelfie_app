import { StyleSheet } from "react-native";
import { useUser } from "../../hooks/useUser";

//Themed Components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";

const Profile = () => {
    const {logout, user} = useUser();

    return (
        <ThemedView style={styles.container}>

            <ThemedText title={true} style={styles.title}>
                {user.email}'s Profile
            </ThemedText>

            <ThemedText>
                {user ? user.email : "No user logged in."}
            </ThemedText>

            <Spacer />

            <ThemedText>
                Time to start reading com books...
            </ThemedText>
            
            <Spacer/>

            <ThemedButton button={true} onPress={logout} >
                <ThemedText>Logout</ThemedText>
            </ThemedButton>

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
