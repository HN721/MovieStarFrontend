import axios from "axios";

export const registerApi = async ({ email, password, username, hp }) => {
  try {
    const response = await axios.post(
      ` http://localhost:3000/api/user/register`,
      {
        email,
        password,
        hp,
        username,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
