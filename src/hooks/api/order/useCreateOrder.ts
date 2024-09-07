import api from "@/utils/services/api";
import { TOrderPayload, TOrderResponse } from "@/utils/types/order";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useCreateOrder = (): UseMutationResult<
  TOrderResponse,
  unknown,
  TOrderPayload,
  unknown
> =>
  useMutation({
    mutationKey: ["create-order"],
    mutationFn: async (payload) => {
      const { data } = await api.post("/orders", payload);
      return data;
    },
  });
