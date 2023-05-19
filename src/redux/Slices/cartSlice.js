import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartData: {},
  bidData: {},
  rentedData: {},
};

export const cartDataSlice = createSlice({
  name: 'cartData',
  initialState,
  reducers: {
    cartData: (state, action) => {
      state.cartData = action.payload;
    },
    bidData: (state, action) => {
      state.bidData = action.payload;
    },
    rentedData: (state, action) => {
      state.rentedData = action.payload;
    },

  },
});

export const { cartData, bidData, rentedData } =
  cartDataSlice.actions;

export default cartDataSlice.reducer;
