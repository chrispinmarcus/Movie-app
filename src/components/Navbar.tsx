interface NavbarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function Navbar({ search, setSearch }: NavbarProps) {
  return (
    <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-6 md:px-12">
      <a href="#" className="font-serif text-2xl font-bold tracking-tight">
        ◉ Movies Bazer<span className="text-purple-500">.</span>
      </a>

      <nav className="hidden items-center gap-8 text-sm text-gray-300 lg:flex">
        <a href="#" className="text-white transition hover:text-purple-400">Home</a>
        <a href="#trending" className="transition hover:text-purple-400">Explore</a>
        <a href="#trending" className="transition hover:text-purple-400">Genre</a>
        <a href="#recommended" className="transition hover:text-purple-400">Movies</a>
        <a href="#recommended" className="transition hover:text-purple-400">TV Shows</a>
      </nav>

      <label className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 sm:max-w-xs">
        <span aria-hidden="true" className="text-gray-400">⌕</span>
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search movies..."
          aria-label="Search movies"
          className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
        />
      </label>
    </header>
  );
}
