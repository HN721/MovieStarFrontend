import React, { useState } from "react";

export default function EditUser() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [Handphone, setHandphone] = useState(null);
  const [role, setRole] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  function handleEditUser() {}
  return (
    <div className="bg-gray-100 p-6  h-screen">
      <h1 className="font-bold text-2xl">Edit User</h1>
      <form onSubmit={handleEditUser}>
        <div className="flex flex-col mt-12">
          <label className="mb-2 font-medium text-slate-900">Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="mb-4 p-2"
            placeholder="Masukan Nama Bioskop"
          />
          <label className="mb-2 font-medium text-slate-900">Email </label>
          <input
            type="email"
            placeholder="Masukan Lokasi Bioskop"
            className="p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mb-2 font-medium text-slate-900">Handphone </label>
          <input
            type="number"
            placeholder="Masukan Lokasi Bioskop"
            className="p-2"
            value={Handphone}
            onChange={(e) => setHandphone(e.target.value)}
          />
          <label className="mb-2 font-medium text-slate-900">Role </label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            id=""
          >
            <option value={role}>Admin</option>
            <option value={role}>User</option>
          </select>
        </div>
        <div className="flex mt-7 gap-3">
          <button className="bg-gray-500 text-white py-2 px-5 rounded-md">
            Cancel
          </button>
          <button className="bg-indigo-600 text-white px-12 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
