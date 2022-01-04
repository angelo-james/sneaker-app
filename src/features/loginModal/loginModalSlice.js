import { createSlice } from "@reduxjs/toolkit";

export const loginModalSlice = createSlice({
  name: "loginModal",
  initialState: {
    open: false,
  },
  reducers: {
    open: (state) => {
      state.open = !state.open;
    },
    close: (state) => {
      state.open = !state.open;
    },
  },
});

export const { open, close } = loginModalSlice.actions;

export default loginModalSlice.reducer;
