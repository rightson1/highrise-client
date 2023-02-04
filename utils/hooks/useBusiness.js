import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { baseUrl } from "../url";
const getSingleBusiness = (id) => axios.get(`${baseUrl}/api/business?id=${id}`);
export const useSingleBusinessQuery = (id) => {
    return useQuery(["business", id], () => getSingleBusiness(id), {
        select: (data) => data.data,
        enabled: !!id,
        cacheTime: 1000 * 60 * 60 * 24,
        staleTime: 1000 * 60 * 60 * 24,
    });
};

const getBusiness = () => axios.get(`${baseUrl}/api/business`);
export const useBusinessQuery = () =>
    useQuery("businesses", () => getBusiness(), {
        select: (data) => data.data,
        cacheTime: 1000 * 60 * 60 * 24,
        select: (data) => data.data,
        staleTime: 1000000,
    });