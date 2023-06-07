import { createSlice } from '@reduxjs/toolkit';
import authOperation from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(authOperation.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperation.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(authOperation.logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.contacts = [];
      })
      .addCase(authOperation.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      });
  },
  // extraReducers: {
  //   [authOperation.register.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [authOperation.logIn.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [authOperation.logOut.fulfilled](state, action) {
  //     state.user = { name: null, email: null };
  //     state.token = null;
  //     state.isLoggedIn = false;
  //     state.contacts = [];
  //   },
  //   [authOperation.fetchCurrentUser.fulfilled](state, action) {
  //     state.user = action.payload;
  //     state.isLoggedIn = true;
  //   },
  // },
});

export default authSlice.reducer;
