import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  accessToken: '',
  refreshToken: '',
  subscription: {},
  fcmToken: ''
};

export const userDataSlice = createSlice({
  name: 'userDATA',
  initialState,
  reducers: {
    userData: (state, action) => {
      state.userData = action.payload;
    },
    accessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    refreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    subscription: (state, action) => {
      state.subscription = action.payload;
    },
    fcmToken: (state, action) => {
      state.fcmToken = action.payload;
    },
  },
});

export const { userData, accessToken, refreshToken, subscription, fcmToken } =
  userDataSlice.actions;

export default userDataSlice.reducer;
