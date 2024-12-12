import { createSlice } from "@reduxjs/toolkit";

const seatSlice = createSlice({
  name: "seat",
  initialState: {
    kursi: null,
  },
  reducers: {
    setKursi: (state, action) => {
      state.kursi = action.payload;
    },
  },
});
export const { setKursi } = seatSlice.actions;
const seatReducer = seatSlice.reducer;
export default seatReducer;
