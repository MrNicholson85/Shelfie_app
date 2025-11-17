import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { Colors } from '../../constants/Colors'
import ThemedTextInput from '../../components/ThemedTextInput'

//Themed Components
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
        const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = () => {
        // Handle register logic here
        console.log('register form submitted', { email, password });
    }
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.title}>register for an account</ThemedText>

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
            
            <ThemedButton onPress={handleSubmit} title="Register">
                <ThemedText style={styles.buttonText}>Register</ThemedText>
            </ThemedButton>
            
            <Spacer height={100} />

            <Link href='/login'>
                <ThemedText style={{textAlign: 'center'}}>Or Login Here</ThemedText>
            </Link>
            
        </ThemedView>
    </TouchableWithoutFeedback>
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
