import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartSubTotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.cartSubTotal = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      state.cartSubTotal = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      state.cartSubTotal = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  //   clearCart: (state) => {
  //     state.cartItems = [];
  //     state.cartSubTotal = 0;
  //   },
   },
});

export const { addToCart, removeFromCart, updateQuantity,  } = cartSlice.actions;
export default cartSlice.reducer;