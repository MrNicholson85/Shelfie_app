import { StyleSheet, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { useState } from 'react'

//Themed Components
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // Handle login logic here
        console.log('login form submitted', { email, password });
    }
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <ThemedView style={styles.container}>

        <ThemedText title={true} style={styles.title}>
            Login to your account
        </ThemedText>
        
            <Spacer height={0} />

        <ThemedTextInput
            style={
                {
                    width: '80%', 
                    marginBottom: 20, 
                    height: 50, 
                    paddingHorizontal: 25, 
                    fontSize: 16
                }
            }
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
        />
        <ThemedTextInput
            style={
                {
                    width: '80%', 
                    marginBottom: 20, 
                    height: 50, 
                    paddingHorizontal: 25, 
                    fontSize: 16
                }
            }
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={setPassword}
            value={password}
        />
        <ThemedButton onPress={handleSubmit} title="Login">
            <ThemedText style={styles.buttonText}>Login</ThemedText>
        </ThemedButton>

            <Spacer height={100} />

        <Link href='/register'>
            <ThemedText style={{textAlign: 'center'}}>Or Register Here</ThemedText>
        </Link>
        
    </ThemedView>
    </TouchableWithoutFeedback>
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
