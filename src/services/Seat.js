import axios from "axios";
import { getToken } from "../utils/getToken";

export async function getOneSeat(id) {
  const token = getToken();

  try {
    const response = await axios.get(
      `https://moviestar-iota.vercel.app/api/seat/get-one/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const booked = response.data.filter((seat) => seat.status === "booked");
    // Store only the seat identifiers for easy comparison
    const bookedSeatNames = booked.map((seat) => seat.kursi);
    return bookedSeatNames;
  } catch (error) {}
}
