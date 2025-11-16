import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

function ThemedButton({style, ...props }) {
    return (
        <Pressable
        {...props}
        style={({pressed}) => [styles.button, pressed && styles.pressed, style]} />
    );
}

const styles = StyleSheet.create({
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
    },
});

export default ThemedButton;
