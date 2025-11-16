import { StyleSheet, Text, View } from 'react-native'

//Themed Components
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'

const Register = () => {
    return (
    <ThemedView style={styles.container}>
        <Spacer />

        <ThemedText title={true} style={styles.title}>register for an account</ThemedText>
        
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
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
    },
})
