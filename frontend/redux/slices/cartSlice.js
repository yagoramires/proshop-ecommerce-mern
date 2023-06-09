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

      return updateCart(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
