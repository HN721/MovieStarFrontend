import axios from "axios";
import { getToken } from "../utils/getToken";

const token = getToken();

export async function deleteFilm(id) {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/film/delete/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {}
}
export async function getFilm() {
  try {
    const response = await axios.get("http://localhost:3000/api/film/get-all");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
