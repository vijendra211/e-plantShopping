import { createSlice } from '@reduxjs/toolkit';

const initialState = { cart: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existing = state.cart.find((item) => item.name === plant.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...plant, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const plantName = typeof action.payload === 'string' ? action.payload : action.payload.name;
      state.cart = state.cart.filter((item) => item.name !== plantName);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.cart.find((plant) => plant.name === name);
      if (!item) return;
      const nextQuantity = Number(quantity);
      if (!Number.isFinite(nextQuantity) || nextQuantity <= 0) {
        state.cart = state.cart.filter((plant) => plant.name !== name);
      } else {
        item.quantity = Math.floor(nextQuantity);
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;