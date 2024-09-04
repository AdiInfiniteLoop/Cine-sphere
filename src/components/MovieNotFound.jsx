// components/MovieNotFound.jsx
export default function MovieNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-200">
      <h1 className="text-4xl font-bold mb-4">Movie Not Found</h1>
      <p className="text-lg mb-8">
        Sorry, we couldn&apos;t find the movie you&apos;re looking for.
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Home
      </a>
    </div>
  );
}
