"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { getUsers } from "../lib/services/authServices";
import axios from "axios";
const API_URL = "https://expatswap.onrender.com/users";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);
  const userData = JSON.parse(localStorage.getItem("user"));

  const token = userData.token;

  console.log(users);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

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
          const usersFromDb = await getUsers(token);

          if (usersFromDb) {
            setLoading(false);
            setUsers(usersFromDb);
          }
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator when loading is true
  }

  if (!users || users.length === 0) {
    return <div>No users found.</div>; // Render message when no users are available
  }

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

          {[users].map((user) => {
            return (
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
