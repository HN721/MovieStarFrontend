import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // import QueryClient and QueryClientProvider
import AdminRoutes from "./pages/admin/AdminRoutes";
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./pages/Home";
import DetailMovie from "./component/DetailMovie";
import Seat from "./pages/Seat";
import Order from "./pages/Order";

// Create an instance of QueryClient
const queryClient = new QueryClient();

const App = () => {
  const token = useSelector((state) => state.auth.user);

  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      {/* Wrap the app with QueryClientProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<DetailMovie />} />
          <Route path="/ticket" element={<Seat />} />
          <Route path="/order" element={<Order />} />

          <Route
            path="/admin/*"
            element={token ? <AdminRoutes /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={token ? <AdminRoutes /> : <Login />} />
          <Route
            path="/register"
            element={token ? <AdminRoutes /> : <Register />}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
