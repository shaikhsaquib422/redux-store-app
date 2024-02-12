import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";

const initialState = {
  cartItems: cartItems,
  total: 0,
  price: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    increase: (state, action) => {
      const id = action.payload;
      console.log("************************");
      console.log(state.cartItems.find({ id }));
    },
  },
});

export const { clearCart, increase } = cartSlice.actions;
export default cartSlice.reducer;
