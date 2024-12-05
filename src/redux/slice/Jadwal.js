import { createSlice } from "@reduxjs/toolkit";

const JadwalSlice = createSlice({
  name: "jadwal",
  initialState: {
    jadwal: [],
  },
  reducers: {
    jadwalAction: (state, action) => {
      state.jadwal = action.payload; // Directly update the jadwal array
    },
  },
});
export const { jadwalAction } = JadwalSlice.actions;
const jadwalReducer = JadwalSlice.reducer;
export default jadwalReducer;
