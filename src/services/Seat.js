import axios from "axios";
import { getToken } from "../utils/getToken";
const token = getToken();

export async function getOneSeat(id) {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/seat/get-one/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {}
}
