import {Client, Account, Avatars} from 'react-native-appwrite'

export const client = new Client()
    .setEndpoint('https://sfo.cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('68f2a24e002872a7420e') // Your project ID
    .setPlatform('dev.digitalprophecystudios.shelfie');

export const account = new Account(client);
export const avatars = new Avatars(client);
