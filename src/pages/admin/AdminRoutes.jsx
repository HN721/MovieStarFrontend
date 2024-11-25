import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout"; // Layout utama
import Dashboard from "../../component/admin/dashboard/Dashboard";
import MovieList from "../../component/admin/Movie/MovieList";
import MovieCreate from "../../component/admin/Movie/MovieCreate";
import Bioskop from "../../component/admin/bioskop/Bioskop";
import AddBioskop from "../../component/admin/bioskop/AddBioskop";
import AddJadwal from "../../component/admin/Jadwal/AddJadwal";
import Jadwal from "../../component/admin/Jadwal/Jadwal";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* AdminLayout membungkus semua halaman di dalam /admin */}
      <Route path="/" element={<AdminLayout />}>
        {/* Rute default untuk /admin akan mengarah ke /admin/dashboard */}
        <Route path="" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="MovieList" element={<MovieList />} />
        <Route path="add-movie" element={<MovieCreate />} />
        <Route path="bioskop" element={<Bioskop />} />
        <Route path="add-bioskop" element={<AddBioskop />} />
        <Route path="jadwal" element={<Jadwal />} />
        <Route path="add-jadwal" element={<AddJadwal />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
