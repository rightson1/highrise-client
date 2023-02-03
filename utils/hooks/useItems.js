import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { baseUrl } from "../url";
const getItem = (category) =>
    axios.get(`${baseUrl}/api/items?category=${category}`);
export const useItemQuery = (category) => {
    return useQuery(["items", category], () => getItem(category), {
        select: (data) => data.data,
        enabled: !!category,
        cacheTime: 1000 * 60 * 60 * 24,
        staleTime: 1000 * 60 * 60 * 24,
    });
};

const getSingleItem = (id) => axios.get(`/api/items/${id}`);
export const useSingleItemQuery = (id) =>
    useQuery(["item", id], () => getSingleItem(id), {
        select: (data) => data.data,
        enabled: !!id,
        cacheTime: 1000 * 60 * 60 * 24,
        select: (data) => data.data,
        staleTime: 1000 * 60 * 60 * 24,
    });

const updateItem = ({ id, ...item }) => axios.put(`/api/items?id=${id}`, item);
export const useUpdateItem = (id) => {
    const queryClient = useQueryClient();
    return useMutation(updateItem, {
        onSuccess: () => {
            queryClient.refetchQueries(["item", id]), getSingleItem(id);
        },
    });
};