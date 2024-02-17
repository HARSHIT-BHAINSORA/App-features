import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Reducer";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
