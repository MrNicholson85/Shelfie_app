import { StyleSheet, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'

//Themed Components
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const {login} = useUser();
    
    const getErrorMessage = (errorMessage) => {
        if (errorMessage.includes('Invalid credentials')) {
            return 'Invalid email or password. Please try again.';
        }
        if (errorMessage.includes('user (role: guests) missing scope')) {
            return 'Invalid email or password. Please check your credentials.';
        }
        if (errorMessage.includes('Invalid email')) {
            return 'Please enter a valid email address.';
        }
        if (errorMessage.includes('Password')) {
            return 'Password must be at least 8 characters long.';
        }
        if (errorMessage.includes('network') || errorMessage.includes('Network')) {
            return 'Network error. Please check your internet connection.';
        }
        if (errorMessage.includes('Too many requests')) {
            return 'Too many login attempts. Please try again later.';
        }
        return 'Login failed. Please try again.';
    };
    
    const handleSubmit = async () => {
        setError(null);
        try {
            await login(email, password);
        } catch (error) {
            setError(getErrorMessage(error.message));
        }
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
            
            {
                error && <ThemedText style={styles.errorText}>{error}</ThemedText>
            }
            
            <Spacer height={20} />

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
    errorText: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10,
        textAlign: 'center',
        marginBottom: 20,
    },
})
