import {StyleSheet} from 'react-native';

//Themed Components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';

const Create = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.title}>Create a new item</ThemedText>
            <Spacer height={0} />
        </ThemedView>
    );
};

export default Create;

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
