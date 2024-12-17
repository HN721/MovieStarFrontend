import axios from "axios";

export default async function LoginApi(email, password) {
  try {
    const response = await axios.post(
      "https://moviestar-iota.vercel.app/api/user/login",
      {
        email,
        password,
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
