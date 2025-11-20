import { createContext, useState } from "react";
import { databases } from "../lib/appwite";
import { useUser } from "../hooks/useUser";
import { ID, Permission, Role } from "react-native-appwrite";

const DATABASE_ID = "691ea49f000620ec3c22";
const COLLECTION_ID = "books";

export const BooksContext = createContext(null);

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]); // State to hold the list of books
    const {user} = useUser();
    async function fetchBooks() {
        try {

        } catch (error) {
            console.error("Error fetching books:", error);
        }
    }

    async function fecthBookById(bookId) {
        try {
        } catch (error) {
            console.error("Error fetching book by ID:", error);
        }
    }

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
            setBooks((prevBooks) => [...prevBooks, response]);
        } catch (error) {
            console.error("Error adding book:", error);
        }
    }

    async function deleteBook() {
        try {
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    }

    return (
        <BooksContext.Provider
            value={{books, setBooks, fetchBooks, fecthBookById, addBook, deleteBook }}>
            {children}
        </BooksContext.Provider>
    );  

}
