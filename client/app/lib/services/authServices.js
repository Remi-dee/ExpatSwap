import axios from "axios";
import { useState } from "react";

const API_URL = "https://expatswap.onrender.com/users";

// Register user
const createUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
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

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

function useUsersSession() {
  const [users, setUsers] = useState([]);
  async function getUsers(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`${API_URL}/me`, config);
    // alert("Users successfully retrieved");
    const usersFromDb = data;
    setUsers(usersFromDb);
    if (usersFromDb) localStorage.setItem("users", JSON.stringify(usersFromDb));
    return usersFromDb;
  }

  return { users, getUsers };
}

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

export { createUser, logout, login, useUsersSession };
