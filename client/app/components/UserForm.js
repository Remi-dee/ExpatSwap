// components/UserForm.js
import React from "react";

const UserForm = ({ onSubmit, formData, onChange, loading }) => {
  return (
    <form onSubmit={onSubmit} className="max-w-md text-left  mx-auto">
      {/* First Name */}
      <div className="mb-4">
        <label htmlFor="firstName" className="block mb-1">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="form-input w-full px-3 py-2"
          value={formData.firstName}
          onChange={onChange}
        />
      </div>
      {/* Last Name */}
      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-1">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="form-input w-full px-3 py-2"
          value={formData.lastName}
          onChange={onChange}
        />
      </div>
      {/* Phone Number */}
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          className="form-input w-full px-3 py-2"
          value={formData.phoneNumber}
          onChange={onChange}
        />
      </div>
      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-input w-full px-3 py-2"
          value={formData.email}
          onChange={onChange}
        />
      </div>
      {/* Password */}
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-input w-full px-3 py-2"
          value={formData.password}
          onChange={onChange}
        />
      </div>
      {/* Date of Birth */}
      <div className="mb-4">
        <label htmlFor="dob" className="block mb-1">
          Date of Birth
        </label>
        <input
          type="date"
          id="dob"
          className="form-input w-full px-3 py-2"
          value={formData.dob}
          onChange={onChange}
        />
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {loading ? "Loading..." : "Create User"}
      </button>
    </form>
  );
};

export default UserForm;
