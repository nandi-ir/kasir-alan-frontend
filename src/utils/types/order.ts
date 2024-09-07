import { TMetaResponse } from ".";
import { TTimeStamps } from "./common";

export type TOrderItemsPayload = {
  product_id: number;
  quantity: number;
};

export type TOrderPayload = {
  order_items: TOrderItemsPayload[];
};

export type TOrderItemsState = {
  name: string;
  price: number;
  amount?: number;
} & TOrderItemsPayload;

export type TOrderItem = {
  id: number;
  total_price: number;
} & TTimeStamps;

export type TOrderResponse = TMetaResponse<TOrderItem>;
