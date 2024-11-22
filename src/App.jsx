import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./pages/admin/AdminRoutes"; // Import AdminRoutes
import Login from "./component/Login";
import Register from "./component/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
