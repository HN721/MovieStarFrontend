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
import JadwalList from "./pages/ListJadwal";
import Account from "./component/User/Account";

// Create an instance of QueryClient
const queryClient = new QueryClient();

const App = () => {
  const token = useSelector((state) => !!state.auth.user);

  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      {/* Wrap the app with QueryClientProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailMovie />} />
          <Route path="/detail/jadwal" element={<JadwalList />} />
          <Route path="/account" element={<Account />} />
          <Route path="/ticket/:id" element={<Seat />} />
          <Route path="/order/:id" element={<Order />} />

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
