import axios from "axios";
import { getToken } from "../utils/getToken";

const token = getToken();

export async function addOrder(jadwal, user, total) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/order/create",
      { jadwal, user, total },
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
