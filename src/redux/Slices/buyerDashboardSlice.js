import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dashboardData: null,
};

export const buyerDashboardSlice = createSlice({
  name: 'dashboardData',
  initialState,
  reducers: {
    dashboardData: (state, action) => {
      state.dashboardData = action.payload;
    },

  },
});

export const { dashboardData } =
  buyerDashboardSlice.actions;

export default buyerDashboardSlice.reducer;
