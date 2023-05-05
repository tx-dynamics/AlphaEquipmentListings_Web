import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dashboardData: null,
  activeUserId: ''
};

export const buyerDashboardSlice = createSlice({
  name: 'dashboardData',
  initialState,
  reducers: {
    dashboardData: (state, action) => {
      state.dashboardData = action.payload;
    },
    activeUserId: (state, action) => {
      state.activeUserId = action.payload;
    },

  },
});

export const { dashboardData, activeUserId } =
  buyerDashboardSlice.actions;

export default buyerDashboardSlice.reducer;
