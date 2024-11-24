import axios from "axios";

export async function bioskopApi(nama, lokasi) {
  try {
    const response = await axios.post(
      " http://localhost:3000/api/bioskop/create",
      {
        nama,
        lokasi,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getBioskopApi() {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/bioskop/get-all"
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
