import { createSlice } from "@reduxjs/toolkit";

const JadwalSlice = createSlice({
  name: "jadwal",
  initialState: {
    jadwal: null,
  },
  reducers: {
    setJadwal: (state, action) => {
      state.jadwal = action.payload;
    },
  },
});
export const { setJadwal } = JadwalSlice.actions;
const jadwalReducer = JadwalSlice.reducer;
export default jadwalReducer;
