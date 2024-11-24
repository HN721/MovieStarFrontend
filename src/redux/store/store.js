import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/auth";
import registerReducer from "../slice/register";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
  },
});
