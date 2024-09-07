import { TMetaResponse } from ".";

export type IProductItem = {
  id: number;
  name: string;
  price: number;
  image: string | null;
  created_at?: Date;
  updated_at?: Date;
};

export type TProductPayload = {
  name: string;
  price: number;
  image: string;
};

export type TProductResponse = TMetaResponse<IProductItem[]>;
