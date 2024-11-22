export const getToken = () => {
  const token = JSON.parse(localStorage.getItem("userInfo") || null);
  return token?.token;
};
