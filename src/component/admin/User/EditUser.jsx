import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { findOneUser, updateUser } from "../../../services/user";

export default function EditUser() {
  const { id } = useParams(); // Assuming the user ID is passed via the route params
  const navigate = useNavigate();

  // Fetch the user data
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getOneUser", id],
    queryFn: () => findOneUser(id),
  });

  // Mutation to update user data
  const mutation = useMutation({
    mutationFn: (updatedUser) => updateUser(id, updatedUser),
    onSuccess: () => {
      alert("User updated successfully!");
      navigate("admin/");
    },
    onError: (error) => {
      alert("Error updating user: " + error.message);
    },
  });

  // State to hold form data
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [handphone, setHandphone] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  // Populate form with fetched user data
  useEffect(() => {
    if (data) {
      setNama(data.name);
      setEmail(data.email);
      setHandphone(data.hp);
      setSelectedRole(data.role);
    }
  }, [data]);

  // Handle form submission
  const handleEditUser = (e) => {
    e.preventDefault();

    // Validate form data (if needed)
    if (!nama || !email || !handphone || !selectedRole) {
      alert("All fields are required!");
      return;
    }

    // Call mutation to update the user
    mutation.mutate({
      name: nama,
      email,
      hp: handphone,
      role: selectedRole,
    });
  };

  if (isLoading) return <p>Loading user data...</p>;
  if (isError) return <p>Error fetching user: {error.message}</p>;

  return (
    <div className="bg-gray-100 p-6 h-screen">
      <h1 className="font-bold text-2xl mb-4">Edit User</h1>
      <form onSubmit={handleEditUser}>
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-slate-900">Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="mb-4 p-2 border rounded"
            placeholder="Masukan Nama User"
            required
          />

          <label className="mb-2 font-medium text-slate-900">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 border rounded"
            placeholder="Masukan Email User"
            required
          />

          <label className="mb-2 font-medium text-slate-900">Handphone</label>
          <input
            type="number"
            value={handphone}
            onChange={(e) => setHandphone(e.target.value)}
            className="mb-4 p-2 border rounded"
            placeholder="Masukan Nomor Handphone"
            required
          />

          <label className="mb-2 font-medium text-slate-900">Role</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="p-2 border rounded"
            required
          >
            <option value="">Pilih Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <div className="flex mt-7 gap-3">
          <button
            type="button"
            onClick={() => navigate("/users")} // Navigate back without saving
            className="bg-gray-500 text-white py-2 px-5 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-12 rounded-md"
            disabled={mutation.isLoading} // Disable submit button while mutation is in progress
          >
            {mutation.isLoading ? "Saving..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
