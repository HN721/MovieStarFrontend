import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import AdminRoutes from "./pages/admin/AdminRoutes";
import Login from "./component/Login";
import Register from "./component/Register";
import Navbar from "./component/Navbar";
import { useSelector } from "react-redux";
import Home from "./pages/Home";

const App = () => {
  const token = useSelector((state) => state.auth.user);

  // Rute-rute di mana Navbar tidak akan muncul
  const hideNavbarPaths = ["/login", "/register", "/admin"];

  // Cek apakah rute saat ini cocok dengan daftar rute yang disembunyikan
  const shouldShowNavbar = !hideNavbarPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <Router>
        {shouldShowNavbar && <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
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
    </>
  );
};

export default App;
