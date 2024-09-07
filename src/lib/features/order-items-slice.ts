import { TOrderItemsState } from "@/utils/types/order";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TOrderItemsInitialState = {
  data: TOrderItemsState[];
};

const initialState = {
  data: [],
} as TOrderItemsInitialState;

export const orderItemsState = createSlice({
  initialState,
  name: "order-item-state",
  reducers: {
    defineOrderItems: (state, action: PayloadAction<TOrderItemsState[]>) => {
      state.data = action.payload;
    },
  },
});

export const { defineOrderItems } = orderItemsState.actions;

export default orderItemsState.reducer;
