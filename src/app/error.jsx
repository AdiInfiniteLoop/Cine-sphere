// components/ErrorPage.jsx
"use client";

import { useRouter } from "next/navigation";

export default function ErrorPage({ errorMessage }) {
  const router = useRouter();
  //style it
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="mb-4">{errorMessage || "Something went wrong."}</p>
      <button
        onClick={() => router.back()}
        className="px-6 py-2 rounded bg-teal-500 hover:bg-teal-600"
      >
        Go Back
      </button>
    </div>
  );
}
