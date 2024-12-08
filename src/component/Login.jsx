import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/slice/auth";
import { useNavigate } from "react-router-dom";
import LoginApi from "../services/Login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Mutation untuk melakukan login
  const loginMutation = useMutation({
    mutationFn: (credentials) =>
      LoginApi(credentials.email, credentials.password),
    onSuccess: (res) => {
      // Update Redux state dan localStorage
      dispatch(loginAction(res));
      localStorage.setItem("userInfo", JSON.stringify(res));

      // Navigasi berdasarkan role user
      if (res.role === "admin") {
        navigate("/admin/dashboard");
      } else if (res.role === "user") {
        navigate("/");
      } else {
        navigate("/register");
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
      alert("Login gagal! Periksa email dan password Anda.");
    },
  });

  // Handle form submit
  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div className="flex bg-cover bg-center justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={loginMutation.isLoading} // Disable tombol saat loading
          >
            {loginMutation.isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
