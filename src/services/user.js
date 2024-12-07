import axios from "axios";
import { getToken } from "../utils/getToken";

const token = getToken();
export async function getUser() {
  try {
    const response = await axios.get("http://localhost:3000/api/user/get-all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {}
}
export async function updateUser(id) {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/user/update/${id}`,
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
      `http://localhost:3000/api/user/find/${id}`,
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
      `http://localhost:3000/api/user/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {}
}
