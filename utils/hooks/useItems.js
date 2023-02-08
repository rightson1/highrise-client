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

const getSingleItem = (id) => axios.get(`${baseUrl}/api/items/single/${id}`);
export const useSingleItemQuery = (id) =>
    useQuery(["items", id], () => getSingleItem(id), {
        select: (data) => data.data,
        enabled: !!id,
        cacheTime: 1000 * 60 * 60 * 24,
        select: (data) => data.data,
        staleTime: 1000 * 60 * 60 * 24,
    });

const updateItem = ({ id, ...item }) =>
    axios.put(`${baseUrl}/api/items?id=${id}`, item);
export const useUpdateItem = (id) => {
    const queryClient = useQueryClient();
    return useMutation(updateItem, {
        onSuccess: () => {
            queryClient.refetchQueries(["item", id]), getSingleItem(id);
        },
    });
};
const getItemStore = ({ filter, id }) =>
    axios.get(`${baseUrl}/api/items?id=${id}&&category=${filter}`);
export const useItemStoreQuery = (store) => {
    return useQuery(
        ["items", store.id + store.filter],
        () => getItemStore(store), {
            select: (data) => data.data,
            enabled: !!store.id && !!store.filter,
            cacheTime: 1000 * 60 * 60 * 24,
            staleTime: 1000 * 60 * 60 * 24,
        }
    );
};

const getItems = () => axios.get(`${baseUrl}/api/items`);
export const useItemsQuery = () => {
    return useQuery("items", getItems, {
        select: (data) => data.data,
        cacheTime: 1000 * 60 * 60 * 24,
        staleTime: 1000 * 60 * 60 * 24,
    });
};
const getSearchedItems = (search) =>
    axios.get(`${baseUrl}/api/items?search=${search}`);
export const useSearchedItemsQuery = (search) => {
    return useQuery(["items", search], () => getSearchedItems(search), {
        select: (data) => data.data,
        enabled: !!search,
        cacheTime: 1000 * 60 * 60 * 24,
        staleTime: 1000 * 60 * 60 * 24,
    });
};