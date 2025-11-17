import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { Colors } from '../../constants/Colors'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'

//Themed Components
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const { register } = useUser();
    
    const getErrorMessage = (errorMessage) => {
        if (errorMessage.includes('user with the same email already exists')) {
            return 'An account with this email already exists. Please login instead.';
        }
        if (errorMessage.includes('Invalid email')) {
            return 'Please enter a valid email address.';
        }
        if (errorMessage.includes('Password must be at least')) {
            return 'Password must be at least 8 characters long.';
        }
        if (errorMessage.includes('Password')) {
            return 'Please enter a valid password (minimum 8 characters).';
        }
        if (errorMessage.includes('network') || errorMessage.includes('Network')) {
            return 'Network error. Please check your internet connection.';
        }
        if (errorMessage.includes('rate limit')) {
            return 'Too many registration attempts. Please try again later.';
        }
        return 'Registration failed. Please try again.';
    };
    
    const handleSubmit = async () => {
        setError(null);
        try {
            await register(email, password);
        } catch (error) {
            setError(getErrorMessage(error.message));
        }
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
            
            <Spacer height={20} />
            
            {
                error && <ThemedText style={styles.errorText}>{error}</ThemedText>
            }
            
            <Spacer height={80} />

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
    errorText: {
        color: Colors.warning,
        textAlign: 'center',
        marginTop: 10,
        fontSize: 14,
    },
})
