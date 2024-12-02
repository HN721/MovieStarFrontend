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
import DetailMovie from "./component/DetailMovie";
import Seat from "./pages/Seat";
import Order from "./pages/Order";
const App = () => {
  const token = useSelector((state) => state.auth.user);

  return (
    <>
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
    </>
  );
};

export default App;
