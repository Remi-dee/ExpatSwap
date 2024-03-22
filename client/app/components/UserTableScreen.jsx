"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { getUsers } from "../lib/services/authServices";
import UserList from "./FilterUser";
import { Modal } from "../lib/modal/modal";

const API_URL = "https://expatswap.onrender.com/users";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [isDefault, setIsDefault] = useState(false);

  const view = useSearchParams().get("view");
  const router = useRouter();

  useEffect(() => {
    let userData;
    if (typeof window !== "undefined") {
      userData = JSON.parse(localStorage.getItem("user"));
    } else {
      false;
    }
    const token = userData?.token;

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

  const handleClick = () => {
    if (!filteredUsers.length) {
      setIsDefault(false);
      router.push("/users/?view=filteruser");
    } else {
      setIsDefault(true);
      setFilteredUsers([]);
    }
  };

  const handleFilter = (startDate, endDate) => {
    const filtered = users.filter((user) => {
      const userDateOfBirth = new Date(user.dateOfBirth);
      return (
        userDateOfBirth >= new Date(startDate) &&
        userDateOfBirth <= new Date(endDate)
      );
    });
    setFilteredUsers(filtered);
  };

  const userList = filteredUsers.length ? filteredUsers : users;

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

      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-semibold mb-4 text-center">Users Table</h1>
        <button
          type="button"
          onClick={handleClick}
          className="border border-blue-500  px-3 py-2 rounded hover:text-white hover:bg-blue-600"
        >
          {filteredUsers.length ? "Return all Users" : "Filter by date range"}
        </button>
      </div>

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

          {userList.map((user) => {
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

      <div>
        {view == "filteruser" ? (
          <Modal
            onClose={() => {
              router.push("/users");
            }}
          >
            <UserList
              onClose={() => {
                router.push("/users");
              }}
              handleFilter={handleFilter}
              filteredUsers={filteredUsers}
            />
          </Modal>
        ) : (
          <div></div>
        )}{" "}
      </div>
    </div>
  );
};

export default UserTable;
