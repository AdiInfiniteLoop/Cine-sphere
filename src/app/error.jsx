"use client";

import Image from "next/image";

export default function ErrorPage({ errorMessage }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-64 h-64 ">
        {errorMessage === "Too many results" ? (
          <Image
            src="/sadpeng.png"
            alt="Too Many Results"
            layout="fill"
            objectFit="contain"
          />
        ) : errorMessage === "Movie not found!" ? (
          <Image
            src="/sadpenglittlepanic.png"
            alt="Movie Not Found"
            layout="fill"
            objectFit="contain"
          />
        ) : (
          <Image
            src="/sadpenganxious.png"
            alt="Error"
            layout="fill"
            objectFit="contain"
          />
        )}
      </div>

      <p className="text-center text-xl">
        {errorMessage || "Something went wrong."}
      </p>
    </div>
  );
}
