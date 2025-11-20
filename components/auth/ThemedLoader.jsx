import { ActivityIndicator, useColorScheme } from "react-native";
import ThemedView from "../ThemedView";
import { Colors } from "../../constants/Colors";

const ThemedLoader = ({ size = "large", style }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <ThemedView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ActivityIndicator size={size} color={theme.primary} style={style} />
        </ThemedView>
    );
};


export default ThemedLoader;
