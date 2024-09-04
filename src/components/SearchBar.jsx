"use client";

import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.trim()) {
        await onSearch(searchTerm);
      }
    };

    const debounceTimeout = setTimeout(fetchData, 300);
    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className="max-w-4xl mx-auto mb-8 p-3 ">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search for movies..."
          className="w-full p-4 pl-10 pr-4 rounded-full border hover:bg-c border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <button
          type="submit"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          disabled
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
