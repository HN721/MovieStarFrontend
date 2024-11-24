import axios from "axios";

export default async function LoginApi(email, password) {
  try {
    const response = await axios.post("http://localhost:3000/api/user/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
