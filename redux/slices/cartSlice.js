import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // if products already exists, this will be used
    replaceProduct: (state, action) => {
      state.cart = action.payload;
    },

    // if products doesnt exists, this will be used
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, replaceProduct } = cartSlice.actions;

export default cartSlice.reducer;
