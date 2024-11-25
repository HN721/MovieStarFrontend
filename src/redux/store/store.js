import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/auth";
import registerReducer from "../slice/register";
import jadwalReducer from "../slice/Jadwal";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    jadwal: jadwalReducer,
  },
});
