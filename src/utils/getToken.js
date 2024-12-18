export const getToken = () => {
  const token = JSON.parse(localStorage.getItem("userInfo"));
  return token?.token;
};
