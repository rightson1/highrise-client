import { auth } from '../firebase';
import { doc, addDoc, collection, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { baseUrl } from '../url';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';

const newOrder = (order) => axios.post(`${baseUrl}/api/orders`, order)
export const useNewOrder = () => {
    return useMutation(newOrder, {
        onSuccess: () => console.log('success'),
    })
}

