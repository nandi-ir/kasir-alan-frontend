import api from "@/utils/services/api";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useDeleteProduct = (): UseMutationResult<
  unknown,
  unknown,
  number,
  unknown
> =>
  useMutation({
    mutationKey: ["delete-product"],
    mutationFn: async (id) => await api.delete("/products/" + id),
  });
