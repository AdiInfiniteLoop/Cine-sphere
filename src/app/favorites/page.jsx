"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold dark:text-white text-purple-600">
          No favorites found
        </h1>
        <h2 className="dark:text-white text-purple-400">
          You haven&apos;t added any movies to your favorites yet.
        </h2>
        <button
          onClick={() => router.push("/")}
          className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
        >
          Let&apos;s add some
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-900 text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-white">Your Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {favorites.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform cursor-pointer"
            onClick={() =>
              router.push(`/movie/${movie.imdbID}?id=${movie.imdbID}`)
            }
          >
            <Image
              src={movie.Poster !== "N/A" ? movie.Poster : "/theater.png"}
              alt={movie.Title}
              width={320}
              height={480}
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
            <h2 className="mt-4 text-xl font-bold text-white">{movie.Title}</h2>
            <p className="text-gray-400">{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
