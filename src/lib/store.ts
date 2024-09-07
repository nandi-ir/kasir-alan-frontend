import { configureStore } from "@reduxjs/toolkit";
import orderItemsReducer from "./features/order-items-slice";
import endingBillReducer from "./features/ending-bill-slice";

export const store = configureStore({
  reducer: {
    orderItemsReducer,
    endingBillReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
