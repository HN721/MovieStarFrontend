import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/auth";
import registerReducer from "../slice/register";
import jadwalReducer from "../slice/Jadwal";
import akunReducer from "../slice/akun";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    jadwal: jadwalReducer,
    akun: akunReducer,
  },
});
