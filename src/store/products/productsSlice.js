import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 10,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
  },
});

export const { increment } = productSlice.actions;

export default productSlice.reducer;
