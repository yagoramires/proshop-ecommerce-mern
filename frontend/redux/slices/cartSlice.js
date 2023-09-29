import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '@/utils/cartUtils';

// const test = localStorage.getItem('cart');
// console.log(test);

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      console.log(state.cartItems);

      // Check if product is in the cart
      const existItem = state.cartItems.find((x) => x._id === item._id);

      // If product is in the cart, replace product, else add it
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x,
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      console.log(state.cartItems);

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
