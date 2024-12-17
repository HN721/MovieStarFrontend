import axios from "axios";
import { getToken } from "../utils/getToken";

// Fungsi untuk menambahkan order
export async function addOrder(jadwal, total) {
  try {
    const token = getToken(); // Ambil token saat fungsi dipanggil
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
  } catch (error) {
    console.error("Error menambahkan order:", error);
    throw error;
  }
}

// Fungsi untuk mengambil satu order berdasarkan ID
export async function getOneOrder(id) {
  try {
    const token = getToken(); // Ambil token saat fungsi dipanggil
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
  } catch (error) {
    console.error("Error mengambil order:", error);
    throw error;
  }
}
