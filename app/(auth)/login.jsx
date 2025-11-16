import { StyleSheet, Text, View } from 'react-native'

//Themed Components
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'

const Login = () => {
    return (
    <ThemedView style={styles.container}>
        <Spacer />

        <ThemedText title={true} style={styles.title}>Login to you account</ThemedText>
        
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
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
    },
})
