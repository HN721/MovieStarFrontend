import { useSelector } from "react-redux";

export const getRole = () => {
  const role = useSelector((state) => state.auth.role);
  return role;
};
