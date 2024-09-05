"use client";

import { useState } from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import LoadingPage from "@/app/loading";
import ErrorPage from "@/app/error";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const handleSearch = async (term, page = 1) => {
    setLoading(true);
    setError(null);
    setSearchTerm(term);
    setCurrentPage(page);

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${term}&page=${page}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search.slice(0, 10));
        setTotalResults(parseInt(data.totalResults));
      } else {
        setMovies([]);
        setTotalResults(0);
        setError(data.Error);
      }
    } catch (err) {
      console.error("An error occurred while fetching the data:", err); //add error
      setMovies([]);
      setTotalResults(0);
      setError("An error occurred while fetching the data. Please try again.");
    }

    setLoading(false);
  };

  const handlePageChange = (page) => {
    handleSearch(searchTerm, page);
  };

  const totalPages = Math.ceil(totalResults / 10);

  const getPaginationButtons = () => {
    const buttons = [];
    const maxButtons = 4;

    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);

    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-4 py-2 rounded ${
            i === currentPage
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-white"
          }`}
        >
          {i}
        </button>
      );
    }

    if (startPage > 1) {
      if (startPage > 2) {
        buttons.unshift(
          <span key="ellipsis-start" className="mx-1 px-4 py-2 text-gray-500">
            ...
          </span>
        );
      }
      buttons.unshift(
        <button
          key="1"
          onClick={() => handlePageChange(1)}
          className="mx-1 px-4 py-2 rounded bg-gray-800 text-white"
        >
          1
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="ellipsis-end" className="mx-1 px-4 py-2 text-gray-500">
            ...
          </span>
        );
      }
      buttons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="mx-1 px-4 py-2 rounded bg-gray-800 text-white"
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && (
        <div className="text-center">
          <LoadingPage />
        </div>
      )}
      {!loading && (
        <>
          <MovieList movies={movies} />
          {error && <ErrorPage errorMessage={error} />}
          {searchTerm && totalResults > 0 && (
            <div className="flex justify-center mt-4 items-center">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="mx-1 px-4 py-2 rounded bg-gray-800 text-white disabled:opacity-50"
              >
                &larr;
              </button>
              {getPaginationButtons()}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="mx-1 px-4 py-2 rounded bg-gray-800 text-white disabled:opacity-50"
              >
                &rarr;
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
