import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TEndingBillItem = {
  amount_paid: number;
  total_price: number;
};

type TEndingBillInitialState = {
  data: TEndingBillItem;
};

const initialState = {
  data: {
    amount_paid: 0,
    total_price: 0,
  },
} as TEndingBillInitialState;

export const endingBillState = createSlice({
  initialState,
  name: "ending-bill-state",
  reducers: {
    defineEndingBill: (state, action: PayloadAction<TEndingBillItem>) => {
      state.data = action.payload;
    },
  },
});

export const { defineEndingBill } = endingBillState.actions;

export default endingBillState.reducer;
