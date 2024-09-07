import api from "@/utils/services/api";
import { TProductResponse } from "@/utils/types/product";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetProducts = (): UseQueryResult<TProductResponse> =>
  useQuery({
    queryKey: ["product-get-all"],
    queryFn: async () => {
      const { data } = await api.get("/products");
      return data;
    },
  });
