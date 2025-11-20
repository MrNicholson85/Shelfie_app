import { View, Text, StyleSheet } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { use, useEffect, useState } from 'react';
import { useBooks } from '../../../hooks/useBooks';

// Themed Components
import ThemedView from '../../../components/ThemedView';
import ThemedText from '../../../components/ThemedText';
import ThemedButton from '../../../components/ThemedButton';
import Spacer from '../../../components/Spacer';
import ThemedCard from '../../../components/ThemedCard';
import ThemedLoader from '../../../components/auth/ThemedLoader';
import { Colors } from '../../../constants/Colors';

const BookDetails = () => {

    // State to hold book details
    const [book, setBook] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const { fetchBookById, deleteBook } = useBooks();
    const router = useRouter();

    const handleDelete = async () => {
        if (!book) return;
        
        setIsDeleting(true);
        const bookId = book.$id;
        
        // Navigate immediately to prevent refetch errors
        router.replace('/books');
        
        // Delete after navigation
        await deleteBook(bookId);
    }

    // Get book ID from route parameters
    const { id } = useLocalSearchParams();

    // Fetch book details when component mounts or ID changes
    useEffect(() => {
        // Don't fetch if we're in the process of deleting
        if (isDeleting) return;
        
        async function loadBook() {
            console.log("Fetching book with ID:", id);
            const fetchedBook = await fetchBookById(id);
            if (fetchedBook) {
                console.log("Book fetched successfully:", fetchedBook);
                setBook(fetchedBook);
            } else {
                console.error("Book not found with ID:", id);
                // Navigate back if book not found
                router.replace('/books');
            }
        }
        if (id) {
            loadBook();
        }
    }, [id, fetchBookById, isDeleting]);

    if(!book) {
        return (
            <ThemedView style={styles.container} safe={true}>
                <ThemedLoader />
            </ThemedView>
        );
    }

    // Render loading state if book data is not yet available
    return (
        <ThemedView style={styles.container} safe={true}>

            <ThemedCard style={styles.card}>

                <Spacer />
        
                <ThemedText style={styles.title}>
                    {book ? book.Title : "Loading..."}
                </ThemedText>

                <ThemedText style={styles.author}>
                    {book ? `by ${book.Author}` : "Loading..."}
                </ThemedText>

                <Spacer />

                <ThemedText style={styles.description}>
                    {book ? book.Description : "Loading..."}
                </ThemedText>

            </ThemedCard>

            <ThemedButton style={styles.deleteButton} onPress={handleDelete}>
                <Text style={{color: '#fff', textAlign: 'center'}}>Delete Book</Text>
            </ThemedButton>
        </ThemedView>

    )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
    card: {  
        margin: 20,
    },
    deleteButton: {
        marginHorizontal: 20,
        backgroundColor: Colors.warning,
        padding: 10,
        borderRadius: 5,
    },
});
