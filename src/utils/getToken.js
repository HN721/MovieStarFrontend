export const getToken = () => {
  try {
    const userInfo = localStorage.getItem("userInfo");
    const parsedUserInfo = userInfo ? JSON.parse(userInfo) : null; // Parse only if `userInfo` exists
    return parsedUserInfo?.token || null; // Return `token` or `null` if not present
  } catch (error) {
    console.error("Failed to retrieve token from localStorage:", error);
    return null; // Return `null` on error
  }
};
