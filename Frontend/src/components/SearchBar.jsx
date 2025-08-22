// components/SearchBar.jsx
import React, { useState } from "react";

const SearchBar = ({ placeholder = "Search", onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputValue.trim();
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onSearch) {
      onSearch(e.target.value.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-lg mx-auto shadow-xl rounded-2xl overflow-hidden bg-gradient-to-tr from-white via-slate-50 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border border-gray-300 dark:border-slate-700"
    >
      <input
        name="search"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-4 pr-12 py-2 text-base sm:text-lg rounded-xl bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-300"
      />
      <button
        type="submit"
        aria-label="Search"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-slate-700 hover:text-blue-600 transition rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
