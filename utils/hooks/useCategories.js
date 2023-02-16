import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { baseUrl } from "../url";
const getCategory = (id) => axios.get(`${baseUrl}/api/category?id=${id}`);
export const useCategoryQuery = (id) => {
  return useQuery(["category", id], () => getCategory(id), {
    select: (data) => data.data,
    enabled: !!id,
    cacheTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  });
};
const allCat = (id) => axios.get(`${baseUrl}/api/category`);
export const useAllCategoryQuery = () => {
  return useQuery("allCategories", () => allCat(), {
    staleTime: 900000,
    onSuccess: () => console.log("success"),
    select: (data) => data.data,
  });
};
