import { createSlice } from "@reduxjs/toolkit";

const regsiterSlice = createSlice({
  name: "register",
  initialState: {
    _id: null,
    email: null,
    name: null,
    hp: null,
    password: null,
  },
  reducers: {
    setUser: (state, action) => {
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.hp = action.payload.hp;
      state.password = action.payload.password;
    },
  },
});
export const { setUser } = regsiterSlice.actions;
const registerReducer = regsiterSlice.reducer;
export default registerReducer;
// Use authSlice.actions here
