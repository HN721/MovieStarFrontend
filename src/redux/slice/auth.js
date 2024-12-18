import { createSlice } from "@reduxjs/toolkit";

// Helper function to safely parse localStorage data
const getUserFromLocalStorage = () => {
  try {
    const userInfo = localStorage.getItem("userInfo");
    return userInfo ? JSON.parse(userInfo) : null; // Parse only if userInfo exists
  } catch (error) {
    console.error("Failed to parse userInfo from localStorage:", error);
    return null; // Return null on error
  }
};

// Initial state
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getUserFromLocalStorage(), // Use the helper function
  },
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload)); // Save to localStorage
    },
    logoutAction: (state) => {
      state.user = null;
      localStorage.removeItem("userInfo"); // Remove from localStorage
    },
  },
});

// Export actions
export const { loginAction, logoutAction } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
