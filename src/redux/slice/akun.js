import { createSlice } from "@reduxjs/toolkit";

const akunSlice = createSlice({
  name: "akun",
  initialState: {
    akun: [],
  },
  reducers: {
    akunAction: (state, action) => {
      state.akun = action.payload; // Directly update the jadwal array
    },
  },
});
export const { akunAction } = akunSlice.actions;
const akunReducer = akunSlice.reducer;
export default akunReducer;
