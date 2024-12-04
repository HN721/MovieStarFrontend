import React, { useEffect, useState } from "react";
import { getUser } from "../../../services/user";

export default function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const re = await getUser();
        setUsers(re);
        console.log(re);
      } catch (error) {
        console.log("Cannot fetch User");
      }
    };
    fetchUser();
  }, []);
  return (
    <div className="p-6 bg-gray-100 h-screen rounded-md ">
      <div className="flex justify-between pb-3 ">
        <h1 className="text-3xl font-bold ">Daftar User</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700">
          Tambah User
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
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
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.hp}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4">
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700">
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
