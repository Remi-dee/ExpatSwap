"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { getUsers, useUsersSession } from "../lib/services/authServices";

const UserTable = () => {
  const [users1, setUsers1] = useState([]);
  const { users, getUsers } = useUsersSession();
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  console.log(users);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const users = JSON.parse(localStorage.getItem("users"));
    const token = userData.token;

    const fetchData = async () => {
      if (!userData) {
        // Redirect to home page if user data is empty
        router.push("/");
      } else {
        setCurrentUser(userData.firstName);
        try {
          const token = userData.token;
          await getUsers(token);
          setLoading(false);
          setUsers1(users);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      }
    };

    fetchData();
  }, [users]);

  // if (loading) {
  //   return <div>Loading...</div>; // Render loading indicator when loading is true
  // }

  // if (!users1 || users1.length === 0) {
  //   return <div>No users found.</div>; // Render message when no users are available
  // }

  return (
    <div className="container  lg:p-4 overflow-x-auto">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          Welcome, {currentUser}!
        </h1>
      </div>
      <h1 className="text-3xl font-semibold mb-4 text-center">User Table</h1>
      <table className="w-full border-collapse border border-gray-300 ">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Phone Number</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {/* Render user data here */}

          {console.log(users)}

          {users.length > 0 ? (
            <div>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.firstName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.lastName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.phoneNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.dateOfBirth}
                  </td>
                </tr>
              ))}
            </div>
          ) : (
            <div className="mx-auto ml-4">No user found!</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
