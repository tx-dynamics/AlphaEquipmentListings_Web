import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  accessToken: '',
  refreshToken: '',
  subscription: {},
  fcmToken: '',
  userLocation: {}
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
    userLocation: (state, action) => {
      state.userLocation = action.payload;
    },
  },
});

export const { userData, accessToken, refreshToken, subscription, fcmToken, userLocation } =
  userDataSlice.actions;

export default userDataSlice.reducer;
