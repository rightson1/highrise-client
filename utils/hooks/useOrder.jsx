import { auth } from '../firebase';
import { baseUrl } from '../url';
import { useMutation, useQuery, useQueryClient } from 'react-query';
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
    return useQuery('orders', () => getOrders(auth.currentUser.email), {
        staleTime: 300000,
        select: (data) => data.data,
    })
}
const updateOrder = ({ id, deleted, name }) => axios.delete(`${baseUrl}/api/orders/single?id=${id}&name=${name}`)

export const useUpdateOrder = () => {
    const queryClient = useQueryClient()
    return useMutation(updateOrder, {
        onSuccess: () => {
            queryClient.refetchQueries('orders')
        }
    })
}

// const getTodayOrders = (email) => axios.get(`${baseUrl}/api/orders?email=${email}&day=${today}`)
