import { createContext, useEffect, useState } from "react"
import { account } from "../lib/appwite";
import {ID} from 'react-native-appwrite';

export const UserContext = createContext(null);

export function UserProvider({children}) {
    const [user, setUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession({
                email: email,
                password: password
            });
            const userInfo = await account.get();
            setUser(userInfo);
            console.log('User logged in successfully:', userInfo);
        } catch (error) {
            throw error;
        }
    }

    async function register(email, password) {
        try {
            const newUser = await account.create({
                userId: ID.unique(),
                email: email,
                password: password
            });
            await login(email, password);
            console.log('User registered successfully:', newUser);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    }
    
    async function logout() {
        try {
            await account.deleteSession({ sessionId: 'current' });
            setUser(null);
            console.log('User logged out successfully');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    }

    async function getInitialUser() {
        try {
            const userInfo = await account.get();
            setUser(userInfo);
        } catch (error) {
            console.error('Error fetching initial user:', error);
        } finally {
            setAuthChecked(true);
        }
    }

    useEffect(() => {
        getInitialUser();
    }, []);

    return (
        <UserContext.Provider value={{user, setUser, login, register, logout}}>
            {children}
        </UserContext.Provider>
    )
}
