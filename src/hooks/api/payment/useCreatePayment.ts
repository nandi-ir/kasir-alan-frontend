import api from "@/utils/services/api";
import { TPaymentPayload, TPaymentResponse } from "@/utils/types/payment";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useCreatePayment = (): UseMutationResult<
  TPaymentResponse,
  unknown,
  TPaymentPayload,
  unknown
> =>
  useMutation({
    mutationKey: ["create-payment"],
    mutationFn: async (payload) => {
      const { data } = await api.post("/payments", payload);
      return data;
    },
  });
