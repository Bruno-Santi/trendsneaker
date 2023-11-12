import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  shoes: null,
  isLoading: true,
  activeShoe: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadShoes: (state, { payload }) => {
      state.shoes = payload;
      state.isLoading = false;
    },
    addItemCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
    removeItemCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    activeShoe: (state, { payload }) => {
      state.activeShoe = payload;
    },
    cleanActiveShoe: (state) => {
      state.activeShoe = null;
    },
  },
});

export const { loadShoes, addItemCart, removeItemCart, activeShoe, cleanActiveShoe } = productSlice.actions;

export default productSlice.reducer;
