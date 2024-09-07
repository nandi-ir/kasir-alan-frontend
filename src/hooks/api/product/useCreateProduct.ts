import api from "@/utils/services/api";
import { TProductPayload } from "@/utils/types/product";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useCreateProduct = (): UseMutationResult<
  unknown,
  unknown,
  TProductPayload,
  unknown
> =>
  useMutation({
    mutationKey: ["create-product"],
    mutationFn: async (payload) => {
      const { data } = await api.post("/products", payload);
      return data;
    },
  });
