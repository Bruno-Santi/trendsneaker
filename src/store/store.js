import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./products";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});
