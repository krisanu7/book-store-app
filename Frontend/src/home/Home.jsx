import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import list from "../../public/list.json";

function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = (searchText) => {
    setQuery(searchText.toLowerCase());
  };

  // Categorize books
  const latestBooks = list.filter((book) => !book.isNew);
  const newBooks = list.filter((book) => book.isNew);

  // Filter by search query
  const filteredLatestBooks = latestBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.description.toLowerCase().includes(query) ||
      book.category.toLowerCase().includes(query)
  );

  const additionalNewBooks = [
    {
      id: "sample-1",
      title: "Mastering React",
      author: "John Doe",
      description: "Dive deep into React with real-world examples and performance tips.",
      image: "https://m.media-amazon.com/images/I/81EUH55ABRL._UF1000,1000_QL80_.jpg",
      price: 24.99,
      category: "Programming",
      isNew: true,
    },
    {
      id: "sample-2",
      title: "Creative Writing Magic",
      author: "Emily Stone",
      description: "Unlock your imagination and master the art of storytelling.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=400&q=80",
      price: 18.5,
      category: "Writing",
      isNew: true,
    },
    {
      id: "sample-3",
      title: "Design Patterns Simplified",
      author: "Sarah Lee",
      description: "Understand classic design patterns in an easy-to-follow and practical way.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
      price: 21.95,
      category: "Software Architecture",
      isNew: true,
    },
  ];

  const combinedNewBooks = [...newBooks, ...additionalNewBooks];

  const filteredNewBooks = combinedNewBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.description.toLowerCase().includes(query) ||
      book.category.toLowerCase().includes(query)
  );

  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />

      {/* 🔍 Search Bar Section */}
      <div className="px-6 md:px-20 mt-10">
        <SearchBar
          placeholder="Search books by title, description or category..."
          onSearch={handleSearch}
        />
      </div>

      {/* 📚 Latest Books Section */}
      <div className="px-8 py-12 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Latest Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredLatestBooks.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-5 bg-white/80 dark:bg-slate-700/80 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-contain mb-4 rounded-lg bg-white"
              />
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="bg-pink-100 text-pink-600 dark:bg-pink-600 dark:text-white text-xs font-medium px-3 py-1 rounded-full transition">
                  {item.category}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                {item.description}
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 px-3 py-1 border border-blue-200 dark:border-blue-500 rounded-full">
                  ${item.price}
                </span>
                <button className="bg-blue-600 hover:bg-purple-600 text-white px-4 py-1.5 rounded-lg transition-all text-sm font-medium shadow-md">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🆕 New Books Section */}
      <div className="px-8 py-12 bg-gradient-to-b from-gray-100 to-white dark:from-slate-800 dark:to-slate-900 transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredNewBooks.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-5 bg-white/90 dark:bg-slate-700/80 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-contain mb-4 rounded-lg bg-white"
              />
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  New
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                {item.description}
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm font-semibold text-green-700 dark:text-green-300 px-3 py-1 border border-green-200 dark:border-green-500 rounded-full">
                  ${item.price}
                </span>
                <button className="bg-green-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-lg transition-all text-sm font-medium shadow-md">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
