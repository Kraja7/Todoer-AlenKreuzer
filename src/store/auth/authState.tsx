import { createSlice } from "@reduxjs/toolkit";

const authState = createSlice({
  name: "authState",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setIsLoggedIn(state: { isLoggedIn: boolean }) {
      state.isLoggedIn = true;
    },
    logOut(state: { isLoggedIn: boolean }) {
      state.isLoggedIn = false;
    },
  },
});

export const getIsLoggedIn = (state: { authState: { isLoggedIn: any } }) => {
  return state.authState.isLoggedIn;
};

export const authReducer = authState.reducer;
export const authActions = authState.actions;
