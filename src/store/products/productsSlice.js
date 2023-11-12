import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  shoes: null,
  isLoading: true,
  activeShoe: null,
};
const savedCart = JSON.parse(localStorage.getItem("cart"));

const initialStateWithLocalStorage = {
  ...initialState,
  cart: savedCart || initialState.cart,
};
export const productSlice = createSlice({
  name: "product",
  initialState: initialStateWithLocalStorage,
  reducers: {
    loadShoes: (state, { payload }) => {
      state.shoes = payload;
      state.isLoading = false;
    },
    addItemCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItemCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setActiveShoe: (state, { payload }) => {
      state.activeShoe = payload;
    },
    cleanActiveShoe: (state) => {
      state.activeShoe = null;
    },
  },
});

export const { loadShoes, addItemCart, removeItemCart, setActiveShoe, cleanActiveShoe } = productSlice.actions;

export default productSlice.reducer;
