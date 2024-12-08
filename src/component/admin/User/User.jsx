import React, { useState, useEffect } from "react";
import { getUser } from "../../../services/user";
import { useDispatch } from "react-redux";
import { akunAction } from "../../../redux/slice/akun";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch user data with react-query
  const {
    data: users = [],
    isLoading,
    isError,
    error,
    refetch, // Get the refetch function from useQuery
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    onSuccess: (data) => {
      dispatch(akunAction(data)); // Dispatch the action to update Redux state
    },
  });

  // Trigger data refresh after login
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // Or use your own logic to detect login
      window.location.reload();
    }
  }, [refetch]);

  // Handle user edit navigation
  const handleSelect = (id) => {
    navigate(`/admin/user/edit-user/${id}`);
  };

  // Pagination calculations
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = users.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6 bg-gray-100 h-screen rounded-md">
      <div className="flex justify-between pb-3">
        <h1 className="text-3xl font-bold">Daftar User</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700">
          Tambah User
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                No HP
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.hp}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleSelect(user._id)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
