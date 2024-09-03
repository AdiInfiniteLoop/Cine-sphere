"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    console.log("MovieDetail mounted. ID:", id);
    if (id) {
      fetchMovieDetails();
    } else {
      setLoading(false);
      setError("No movie ID provided");
    }
  }, [id]);

  const fetchMovieDetails = async () => {
    try {
      console.log(`Fetching movie details for ID: ${id}`);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched movie data:", data);
      setMovie(data);
    } catch (e) {
      console.error("Error fetching movie details:", e);
      setError("Failed to fetch movie details");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>No movie data found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to Search
      </Link>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <Image
            src={
              movie.Poster !== "N/A" ? movie.Poster : "/images/placeholder.png"
            }
            alt={movie.Title}
            width={300}
            height={445}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
          <p className="text-gray-600 mb-4">
            {movie.Year} | {movie.Genre} | {movie.Runtime}
          </p>
          <p className="mb-4">{movie.Plot}</p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {movie.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
}
