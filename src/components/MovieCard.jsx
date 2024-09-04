"use client";

import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const MovieCard = ({ movie }) => {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[400px] rounded-xl p-4 border transition-transform duration-100 flex flex-col">
        <CardItem
          translateZ="50"
          className="text-lg font-bold text-neutral-600 dark:text-white line-clamp-1"
        >
          {movie.Title}
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-xs mt-1 dark:text-neutral-300 line-clamp-1"
        >
          {movie.Year} {movie.Genre && `- ${movie.Genre}`}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-2 flex-grow">
          <div className="w-full h-[250px] relative">
            <Image
              src={movie.Poster !== "N/A" ? movie.Poster : "/theater.png"}
              alt={movie.Title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg group-hover/card:shadow-xl"
            />
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-auto pt-2">
          <CardItem
            translateZ={20}
            as={Link}
            href={`/movie/${movie.imdbID}?id=${movie.imdbID}`}
            className="px-3 py-1.5 rounded-lg text-s font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            View Details
          </CardItem>
          <Link
            href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardItem
              translateZ={20}
              as="button"
              className="px-3 py-1.5 rounded-lg bg-black dark:bg-white dark:text-black text-white text-2xs font-bold hover:bg-gray-800 dark:hover:bg-gray-400 transition-colors"
            >
              Watch Trailer
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default MovieCard;
