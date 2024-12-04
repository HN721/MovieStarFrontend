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
