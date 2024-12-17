import axios from "axios";
import { getToken } from "../utils/getToken";

const token = getToken();

export async function addOrder(jadwal, total) {
  try {
    const response = await axios.post(
      "https://moviestar-iota.vercel.app/api/order/create",
      { jadwal, total },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {}
}
export async function getOneOrder(id) {
  try {
    const response = await axios.get(
      `https://moviestar-iota.vercel.app/api/order/get-one/${id}`,
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
