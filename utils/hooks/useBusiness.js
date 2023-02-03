import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { baseUrl } from "../url";
const getBusiness = (id) => axios.get(`${baseUrl}/api/business?id=${id}`);
export const useSingleBusinessQuery = (id) => {
    return useQuery(["business", id], () => getBusiness(id), {
        select: (data) => data.data,
        enabled: !!id,
        cacheTime: 1000 * 60 * 60 * 24,
        staleTime: 1000 * 60 * 60 * 24,
    });
};

const getSingleBusiness = () => axios.get(`${baseUrl}/api/business`);
export const useBusinessQuery = () =>
    useQuery("businesses", () => getSingleBusiness(), {
        select: (data) => data.data,
        cacheTime: 1000 * 60 * 60 * 24,
        select: (data) => data.data,
        staleTime: 1000000,
    });

const updateBusiness = ({ id, ...business }) =>
    axios.put(`/api/businesss?id=${id}`, business);
export const useUpdateBusiness = (id) => {
    const queryClient = useQueryClient();
    return useMutation(updateBusiness, {
        onSuccess: () => {
            queryClient.refetchQueries(["business", id]), getSingleBusiness(id);
        },
    });
};