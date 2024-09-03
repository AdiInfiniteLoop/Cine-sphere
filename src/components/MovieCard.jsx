import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.imdbID}?id=${movie.imdbID}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#2d2c2c] to-[#434343] rounded-lg shadow-lg overflow-hidden transition-transform duration-300"
      >
        <div className="w-full h-0 pb-[150%] relative">
          <Image
            src={
              movie.Poster !== "N/A" ? movie.Poster : "/images/placeholder.png"
            }
            alt={movie.Title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4 bg-gradient-to-br from-[#2d2c2c] to-[#434343]">
          <h2 className="text-2xl text-white font-bold mb-2 truncate">
            {movie.Title}
          </h2>
          <p className="text-gray-200 mb-4 truncate">{movie.Year}</p>
          <p className="text-gray-200 truncate">{movie.Genre}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default MovieCard;
