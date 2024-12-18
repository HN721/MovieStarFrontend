import { createSlice } from "@reduxjs/toolkit";

// Initial state
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("userInfo")) || null,
  },
  // Reducers
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload)); // Save user info
    },
    logoutAction: (state) => {
      state.user = null;
      localStorage.removeItem("userInfo"); // Remove user info
    },
  },
});

// Generate actions
export const { loginAction, logoutAction } = authSlice.actions; // Use authSlice.actions here

// Generate reducer
const authReducer = authSlice.reducer;
export default authReducer;
