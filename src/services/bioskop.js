import axios from "axios";
import { getToken } from "../utils/getToken";

const token = getToken();

export async function bioskopApi(nama, lokasi) {
  try {
    const response = await axios.post(
      "https://moviestar-iota.vercel.app/api/bioskop/create",
      {
        nama,
        lokasi,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getBioskopApi() {
  try {
    const response = await axios.get(
      "https://moviestar-iota.vercel.app/api/bioskop/get-all",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
