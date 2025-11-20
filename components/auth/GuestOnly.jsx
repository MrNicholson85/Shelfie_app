import {useUser} from '../../hooks/useUser';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { Text } from 'react-native';    
import ThemedLoader from './ThemedLoader';

const GuestOnly = ({ children }) => {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authChecked && user !== null) {
            router.replace('/profile');
        }
    }, [authChecked, user]);

    if (!authChecked) {
        return <Text>Loading...</Text>;
    }

    if (user !== null) {
        return <ThemedLoader />;
    }

    return children;
};
export default GuestOnly;
