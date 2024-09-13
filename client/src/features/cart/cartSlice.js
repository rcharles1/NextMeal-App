import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        // Item already exists in cart, increment quantity
        state.items[itemIndex].quantity += 1;
      } else {
        // Item is not in cart, add it with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantity > 1) {
          // If item's quantity > 1, decrease it by 1
          state.items[itemIndex].quantity -= 1;
        } else {
          // If item's quantity = 1, remove it from cart
          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
      }
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;