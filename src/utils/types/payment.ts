import { TMetaResponse } from ".";
import { TTimeStamps } from "./common";
import { TOrderItemsPayload } from "./order";

export type TPaymentPayload = {
  order_id?: number;
  amount_paid: number;
  order_items: TOrderItemsPayload[];
};

export type TPaymentItem = {
  id: number;
  amount_paid: number;
  change_due: number;
  order_id: number;
  order: {
    id: number;
    customer_name: string;
    status: "pending" | "paid";
    total_price: number;
  } & TTimeStamps;
} & TTimeStamps;

export type TPaymentResponse = TMetaResponse<TPaymentItem>;
