import axios from "axios";
import { getToken } from "../utils/getToken";

const token = getToken();
export async function getUser() {
  try {
    const response = await axios.get(
      "https://moviestar-iota.vercel.app/api/user/get-all",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {}
}
export async function updateUser(id, userData) {
  try {
    const response = await axios.put(
      `https://moviestar-iota.vercel.app/api/user/update/${id}`,
      userData,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {}
}
export async function findOneUser(id) {
  try {
    const response = await axios.get(
      `https://moviestar-iota.vercel.app/api/user/find/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {}
}
export async function deleteUser(id) {
  try {
    const response = await axios.delete(
      `https://moviestar-iota.vercel.app/api/user/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {}
}
