import axios from "axios";
import { getToken } from "../utils/getToken";
const token = getToken();

export async function createJadwalApi(movie, bioskop, tanggal, waktu, harga) {
  try {
    const res = await axios.post(
      "https://moviestar-iota.vercel.app/api/jadwal/create",
      { movie, bioskop, tanggal, waktu, harga },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
}
export async function getJadwalApi() {
  try {
    const res = await axios.get(
      "https://moviestar-iota.vercel.app/api/jadwal/get-all"
    );
    return res.data;
  } catch (error) {
    return error;
  }
}
export async function getOneJadwalApi(id) {
  try {
    const res = await axios.get(
      `https://moviestar-iota.vercel.app/api/jadwal/get-one/${id}`
    );
    return res.data;
  } catch (error) {
    return error;
  }
}
