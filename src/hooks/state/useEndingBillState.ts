import {
  defineEndingBill,
  TEndingBillItem,
} from "@/lib/features/ending-bill-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";

export const useEndingBillState = () => {
  const dispatch = useAppDispatch();
  const orderItems = useAppSelector((state) => state.endingBillReducer.data);
  const setOrderItems = (val: TEndingBillItem) =>
    dispatch(defineEndingBill(val));

  return { orderItems, setOrderItems };
};
