import React, { useState } from "react";

const UserList = ({ onClose, handleFilter }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilterClick = () => {
    handleFilter(startDate, endDate);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white text-2xl font-semibold mb-2">
            Start D0B:
          </label>
          <input
            type="date"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-2 text-white text-2xl">
            End DOB:
          </label>
          <input
            type="date"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <button
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={() => {
          handleFilterClick();
          onClose();
        }}
      >
        Filter
      </button>
    </div>
  );
};

export default UserList;
