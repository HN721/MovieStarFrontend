import axios from "axios";
import { getToken } from "../utils/getToken";

const token = getToken();

export async function deleteFilm(id) {
  try {
    const response = await axios.delete(
      `https://moviestar-iota.vercel.app/api/film/delete/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {}
}
export async function getFilm() {
  try {
    const response = await axios.get(
      "https://moviestar-iota.vercel.app/api/film/get-all"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getOne(id) {
  try {
    const response = await axios.get(
      `https://moviestar-iota.vercel.app/api/film/get-one/${id}`
    );
    return response.data;
  } catch (error) {}
}
