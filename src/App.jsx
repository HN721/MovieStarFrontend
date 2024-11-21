import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./pages/admin/AdminRoutes"; // Import AdminRoutes

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* Rute Default */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
