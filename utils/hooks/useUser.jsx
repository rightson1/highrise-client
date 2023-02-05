import { auth } from '../firebase';
import { doc, addDoc, collection, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useMutation, useQuery } from 'react-query';

const userRef = collection(db, 'users');
const addUser = (user) => addDoc(userRef, { ...user, createdAt: new Date() });
export const useRegister = () => {
    return useMutation(addUser, {
        onSuccess: () => console.log('success'),
    })
}

