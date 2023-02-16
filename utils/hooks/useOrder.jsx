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
const today = new Date().getDate();

const getOrders = (email) => axios.get(`${baseUrl}/api/orders?email=${email}&day=${today}`)
export const useOrderQuery = () => {
    return useQuery(['orders'], () => getOrders(auth.currentUser.email), {
        staleTime: 300000,
        select: (data) => data.data,
    })
}

// const getTodayOrders = (email) => axios.get(`${baseUrl}/api/orders?email=${email}&day=${today}`)
