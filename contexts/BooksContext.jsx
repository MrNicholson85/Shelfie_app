import { createContext, useState, useEffect } from "react";
import { client, databases } from "../lib/appwite";
import { useUser } from "../hooks/useUser";
import { ID, Permission, Role, Query } from "react-native-appwrite";

// Constants for database and collection IDs
const DATABASE_ID = "691ea49f000620ec3c22";
const COLLECTION_ID = "books";

// Create the BooksContext
export const BooksContext = createContext(null);

// Provider component to wrap the app and provide books data and functions
export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]); // State to hold the list of books
    const {user} = useUser();

    // Fetch all books for the logged-in user
    async function fetchBooks() {
        if (!user) {
            console.log("No user logged in, skipping fetch");
            return;
        }
        
        try {
            const response = await databases.listDocuments({
                databaseId: DATABASE_ID, 
                collectionId: COLLECTION_ID, 
                queries: [
                    Query.equal("userId", user.$id),
                ]
            });
            
            setBooks(response.documents);
            console.log("Books fetched successfully:", response.documents);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    }

    // Fetch a single book by its ID
    async function fetchBookById(bookId) {
        console.log("fetchBookById called with:", bookId);
        console.log("Available books:", books.map(b => ({ id: b.$id, title: b.Title })));
        
        // First try to find in the local books array
        const localBook = books.find(b => b.$id === bookId);
        if (localBook) {
            console.log("Found book in local state:", localBook);
            return localBook;
        }
        
        // If not found locally, try fetching from database
        console.log("Book not in local state, fetching from database...");
        try {
            const response = await databases.getDocument(
                DATABASE_ID,
                COLLECTION_ID,
                bookId
            );
            console.log("Document fetched from database:", response);
            return response;
        } catch (error) {
            console.error("Error fetching book by ID:", error);
            console.error("Attempted to fetch document ID:", bookId);
            console.error("This book may have been deleted or you don't have permission to view it");
            return null;
        }
    }

    // Add a new book for the logged-in user
    async function addBook(bookData) {
        try {
            const response = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {
                    Title: bookData.title,
                    Author: bookData.author,
                    Description: bookData.description,
                    userId: user.$id
                },
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]
            );
            console.log("Book added successfully:", response);
            // Manually add to local state immediately
            setBooks((prevBooks) => [...prevBooks, response]);
        } catch (error) {
            console.error("Error adding book:", error);
        }
    }

    // Delete a book by its ID
    async function deleteBook(bookId) {
        try {
            await databases.deleteDocument(
                DATABASE_ID,
                COLLECTION_ID,
                bookId
            );
            console.log("Book deleted successfully:", bookId);
            // Manually update local state if real-time doesn't trigger
            setBooks((prevBooks) => prevBooks.filter(book => book.$id !== bookId));
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    }

    // Set up real-time subscription to book changes
    useEffect(() => {
        let unsubscribe;
        const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;

        // Subscribe to real-time updates only if a user is logged in
        if (user) {
            fetchBooks();

            unsubscribe = client.subscribe(channel, (response) => {
                const {payload, events} = response;

                    if(events[0].includes('create')) {
                        setBooks((prevBooks) => [...prevBooks, payload]);
                    }

                     if(events[0].includes('delete')) {
                        setBooks((prevBooks) => prevBooks.filter(book => book.$id !== payload.$id));
                    }
                });
        } else { // Clear books if no user is logged in
            setBooks([]);
        }

        // Cleanup subscription on unmount or user change
        return () => {
            if(unsubscribe) unsubscribe();
        }
    }, [user]);

    // Provide the books data and functions to children components
    return (
        <BooksContext.Provider
            value={{books, setBooks, fetchBooks, fetchBookById, addBook, deleteBook }}>
            {children}
        </BooksContext.Provider>
    );  

}
