import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../components/pages/home/Home";
import { InitialStateType } from "./types";

const initialState: InitialStateType = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },
  },
});
