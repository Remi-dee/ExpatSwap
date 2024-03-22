"use client";

import React, { useState } from "react";
import UserForm from "./UserForm";
import { createUser } from "../lib/services/authServices";
import { validateForm } from "../lib/validation";
import { useRouter } from "next/navigation";

const UserCreation = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: null,
    email: "",
    password: "",
    dob: "",
  });

  // Form change handler
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation before submitting
    if (validateForm(formData)) {
      setIsLoading(true);
      const userCreated = await createUser(formData);
      if (userCreated) setIsLoading(false);
      router.push("/users");
    }
  };

  return (
    <div className="container flex flex-col text-center mx-auto p-4">
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-semibold mb-4 text-center">
          Welcome to ExpatSwap!
        </h1>
      </div>
      <h1 className="text-3xl font-semibold mb-6">Kindly Enter Your Details</h1>
      <UserForm
        onSubmit={handleSubmit}
        formData={formData}
        onChange={handleChange}
        loading={isLoading}
      />
    </div>
  );
};

export default UserCreation;
