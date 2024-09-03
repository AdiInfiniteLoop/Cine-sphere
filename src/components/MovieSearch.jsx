"use client";

import { useState } from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError("An error occurred while fetching the data.");
      setMovies([]);
    }
    setLoading(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {/* {loading && <p className="text-center">Load Hoti reh</p>} */}
      {/* {error && <p className="text-center text-red-500">{error}</p>} */}
      {/* {!loading && !error && <MovieList movies={movies} />}
       */}
      <MovieList movies={movies} />
    </div>
  );
}
