import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    open: false,
    count: 0,
  },
  reducers: {
    open: (state) => {
      state.open = !state.open;
    },
    close: (state) => {
      state.open = !state.open;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { open, close, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
