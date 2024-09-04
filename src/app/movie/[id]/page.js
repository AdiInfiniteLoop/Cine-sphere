"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import LoadingPage from "@/app/loading";
import ErrorPage from "@/app/error";
import MovieNotFound from "@/components/MovieNotFound";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      fetchMovieDetails();
    } else {
      setLoading(false);
      setError("No movie ID provided");
    }
  }, [id]);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.Response === "True") {
        setMovie(data);
        checkIfFavorite(data.imdbID);
      } else {
        setMovie(null);
      }
    } catch (e) {
      setError("Failed to fetch movie details");
    } finally {
      setLoading(false);
    }
  };

  const checkIfFavorite = (imdbID) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some((fav) => fav.imdbID === imdbID);
    setIsFavorite(isFavorite);
  };

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

    if (!isFavorite) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  const handleRemoveFromFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favorites.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(false);
  };

  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage errorMessage={error} />;
  if (!movie) return <MovieNotFound />;

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-700 text-gray-200 mt-10">
      <button
        onClick={() => router.back()}
        className="text-white hover:underline mb-4 inline-block text-xl font-semibold"
      >
        &larr; Back
      </button>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <Image
            src={movie.Poster !== "N/A" ? movie.Poster : "/theater.png"}
            alt={movie.Title}
            width={300}
            height={350}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-4xl font-bold mb-2 text-white">{movie.Title}</h1>
          <p className="text-gray-300 mb-4 text-2xl">
            <span>
              {movie.Year !== "N/A" && movie.Year && movie.Year}
              {movie.Genre !== "N/A" && movie.Genre && ` | ${movie.Genre}`}
              {movie.Runtime !== "N/A" &&
                movie.Runtime &&
                ` | ${movie.Runtime}`}
            </span>
          </p>
          <p className="mb-4 text-xl">
            {movie.Plot !== "N/A"
              ? movie.Plot
              : "Unfortunately,   There is no plot for this movie"}
          </p>
          <p className="text-xl">
            <strong>Director:</strong>{" "}
            {movie.Director !== "N/A"
              ? movie.Director
              : "Somehow this movie doesn't have any Director"}
          </p>
          <p className="text-xl">
            <strong>Actors:</strong>{" "}
            {movie.Actors !== "N/A"
              ? movie.Actors
              : "A movie without actors is rare but not impossible"}
          </p>
          <p className="text-xl">
            <strong>IMDb Rating: </strong>
            {movie.imdbRating !== "N/A" ? movie.imdbRating : "Not Rated"}
          </p>
          <button
            onClick={
              isFavorite ? handleRemoveFromFavorites : handleAddToFavorites
            }
            className={`mt-4 px-4 py-2 ${
              isFavorite ? "bg-red-600" : "bg-green-500"
            } text-white rounded hover:bg-gray-600 `}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}
