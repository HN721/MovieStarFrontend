import { createSlice } from "@reduxjs/toolkit";

// Initial state
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("userInfo")),
  },
  // Reducers
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    logoutAction: (state) => {
      state.user = null;
    },
  },
});

// Generate actions
export const { loginAction, logoutAction } = authSlice.actions; // Use authSlice.actions here

// Generate reducer
const authReducer = authSlice.reducer;
export default authReducer;
