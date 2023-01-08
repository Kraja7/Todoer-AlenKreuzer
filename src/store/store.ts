import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authState";

export const store = configureStore({
  reducer: {
    // auth
    authState: authReducer,
    // fetch
  },
});
