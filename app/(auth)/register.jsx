import { StyleSheet, Text, View } from 'react-native'

//Themed Components
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
    const handleSubmit = () => {
        // Handle register logic here
        console.log('Register button pressed');
    }
    return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.title}>register for an account</ThemedText>

        <Spacer />
        
        <ThemedButton onPress={handleSubmit} title="Register">
            <ThemedText style={styles.buttonText}>Register</ThemedText>
        </ThemedButton>
        
        <Spacer height={100} />

        <Link href='/login'>
            <ThemedText style={{textAlign: 'center'}}>Or Login Here</ThemedText>
        </Link>
        
    </ThemedView>
    )
}

export default Register

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
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:24,
        textTransform: 'uppercase',
        paddingHorizontal: 50,
    },
})
