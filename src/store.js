import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import loginModalReducer from "./features/loginModal/loginModalSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    loginModal: loginModalReducer,
  },
});
