import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout"; // Layout utama
import Dashboard from "../../component/admin/dashboard/Dashboard";
import MovieList from "../../component/admin/Movie/MovieList";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* AdminLayout membungkus semua halaman di dalam /admin */}
      <Route path="/" element={<AdminLayout />}>
        {/* Rute default untuk /admin akan mengarah ke /admin/dashboard */}
        <Route path="" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="MovieList" element={<MovieList />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
