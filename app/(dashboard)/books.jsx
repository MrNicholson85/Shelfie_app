import { StyleSheet, FlatList, Pressable, RefreshControl } from "react-native";
import { useBooks } from "../../hooks/useBooks";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";
import { useState } from "react";

//Themed Components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedCard from "../../components/ThemedCard";



const Books = () => {
    const {books, fetchBooks} = useBooks();
    const router = useRouter();
    const [refreshing, setRefreshing] = useState(false);
    
    const onRefresh = async () => {
        setRefreshing(true);
        await fetchBooks();
        setRefreshing(false);
    };
    
    return (
        <ThemedView style={styles.container} safe={true}>

            <Spacer />
            <ThemedText title={true} style={styles.heading}>
                Your Reading List
            </ThemedText>
            <Spacer height={20} />
            <FlatList
                data={books}
                keyExtractor={(item) => item.$id}
                contentContainerStyle={styles.list}
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing} 
                        onRefresh={onRefresh}
                        tintColor={Colors.light.tint}
                    />
                }
                renderItem={({ item }) => (
                    <Pressable onPress={() => router.push(`/books/${item.$id}`)}>
                    <ThemedCard style={styles.card}>
                        <ThemedText style={styles.title}>{item.Title}</ThemedText>
                        <ThemedText>{item.Author}</ThemedText>
                    </ThemedCard>
                    </Pressable>
                )}
            />
        </ThemedView>
    );
};

export default Books;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    heading: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    list: {
        marginTop: 40,
    },
    card: {
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 10,
        padding: 10,
        paddingLeft: 14,
        borderLeftColor: Colors.primary,
        borderLeftWidth: 4,
    },
    title: {
        fontSize:20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});
