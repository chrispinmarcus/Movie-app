import type { Movie } from "../types";
import MovieCard from "./MovieCard";

interface MovieSectionProps {
  id: string;
  title: string;
  movies: Movie[];
}

export default function MovieSection({ id, title, movies }: MovieSectionProps) {
  return (
    <section id={id} className="mt-16 scroll-mt-8">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="shrink-0 text-xl font-bold">{title}</h2>
        <div className="h-px flex-1 bg-gray-800" />
        <a href="#top" className="shrink-0 text-xs text-gray-400 transition hover:text-purple-400">
          Back to top ↑
        </a>
      </div>

      {movies.length > 0 ? (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      ) : (
        <p className="rounded-lg border border-gray-800 bg-gray-900/50 p-8 text-center text-gray-400">
          No movies found. Try another title.
        </p>
      )}
    </section>
  );
}
