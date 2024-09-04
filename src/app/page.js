import MovieSearch from "@/components/MovieSearch";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-black">
      <main className="container mx-auto px-4 py-8">
        <MovieSearch />
      </main>
    </div>
  );
}
