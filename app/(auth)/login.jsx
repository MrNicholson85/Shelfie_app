import { StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'

//Themed Components
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Login = () => {
    const handleSubmit = () => {
        // Handle login logic here
        console.log('Login button pressed');
    }
    return (
    <ThemedView style={styles.container}>
        <Spacer />

        <ThemedText title={true} style={styles.title}>Login to you account</ThemedText>
        
        <Spacer height={0} />

        <ThemedButton onPress={handleSubmit} title="Login">
            <ThemedText style={styles.buttonText}>Login</ThemedText>
        </ThemedButton>

        <Spacer height={100} />
        <Link href='/register'>
            <ThemedText style={{textAlign: 'center'}}>Or Register Here</ThemedText>
        </Link>
        
    </ThemedView>
    )
}

export default Login

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
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        borderRadius: 10,
        height: 70,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    pressed: {
        opacity: 0.75,
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
