import { useState } from "react";
import type { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.image}`;

  return (
    <article className="group min-w-0 cursor-pointer">
      {imageFailed ? (
        <div className="flex aspect-[2/3] w-full items-center justify-center rounded-lg bg-gray-900 px-3 text-center text-sm text-gray-500">
          Poster unavailable
        </div>
      ) : (
        <img
          src={posterUrl}
          alt={`${movie.title} poster`}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="aspect-[2/3] w-full rounded-lg object-cover transition duration-300 group-hover:scale-[1.03] group-hover:shadow-xl group-hover:shadow-purple-950/40"
        />
      )}
      <h3 className="mt-3 truncate text-sm font-semibold">{movie.title}</h3>
      <p className="mt-2 text-xs text-gray-400">
        {movie.year}<span className="px-1.5 text-red-500">•</span>{movie.duration}
      </p>
    </article>
  );
}
