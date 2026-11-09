import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieSection from "./components/MovieSection";
import Footer from "./components/Footer";
import { recommendedMovies, trendingMovies } from "./data/movies";

export default function App() {
  const [search, setSearch] = useState("");

  const normalizedSearch = search.trim().toLowerCase();

  const filteredTrending = useMemo(
    () => trendingMovies.filter((movie) => movie.title.toLowerCase().includes(normalizedSearch)),
    [normalizedSearch],
  );

  const filteredRecommended = useMemo(
    () => recommendedMovies.filter((movie) => movie.title.toLowerCase().includes(normalizedSearch)),
    [normalizedSearch],
  );

  return (
    <div id="top" className="min-h-screen bg-[#050505] text-white">
      <Navbar search={search} setSearch={setSearch} />

      <main className="mx-auto max-w-7xl px-6 md:px-12">
        {!normalizedSearch && <Hero />}

        <MovieSection
          id="trending"
          title="🔥 Trending"
          movies={filteredTrending}
        />

        <MovieSection
          id="recommended"
          title="You May Like This"
          movies={filteredRecommended}
        />
      </main>

      <Footer />
    </div>
  );
}
