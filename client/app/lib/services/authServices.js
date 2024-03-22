import axios from "axios";
import { useState } from "react";

const API_URL = "https://expatswap.onrender.com/users";

// Register user
const createUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);

    if (typeof window !== "undefined" && response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    alert("You've successfully signed in" + response.data);
    return response.data;
  } catch (error) {
    alert("Unable to create user: " + error.message);
  }
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (typeof window !== "undefined" && response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Get Users
async function getUsers(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`${API_URL}/allUsers`, config);
  // alert("Users successfully retrieved");
  const usersFromDb = data;

  return usersFromDb;
}

// Logout user
const logout = () => {
  if (typeof window !== "undefined" && response.data) {
    localStorage.removeItem("user");
  }
};

export { createUser, logout, login, getUsers };
