import { defineOrderItems } from "@/lib/features/order-items-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { TOrderItemsState } from "@/utils/types/order";

export const useOrderItemsState = () => {
  const dispatch = useAppDispatch();
  const orderItems = useAppSelector((state) => state.orderItemsReducer.data);
  const setOrderItems = (val: TOrderItemsState[]) =>
    dispatch(defineOrderItems(val));

  return { orderItems, setOrderItems };
};
