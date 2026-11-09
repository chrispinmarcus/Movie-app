export default function Hero() {
  return (
    <section className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
      <div>
        <p className="text-sm font-bold tracking-[0.25em] text-gray-300">FIND MOVIES</p>
        <h1 className="mt-3 text-4xl font-black uppercase leading-tight md:text-6xl">
          <span className="text-blue-600">TV Shows</span>
          <br />
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            And More
          </span>
        </h1>
        <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
          Discover the latest movies, popular TV shows, amazing stories and entertainment from around the world.
          Find your next favorite movie here.
        </p>
        <a
          href="#trending"
          className="mt-7 inline-flex rounded-lg border border-white px-5 py-3 text-sm transition hover:border-purple-600 hover:bg-purple-600"
        >
          ▶ Explore Movies
        </a>
      </div>

      <div className="relative mx-auto flex h-[350px] w-full max-w-lg items-center justify-center">
        <img
          src="https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii0o5a.jpg"
          alt="Guardians of the Galaxy poster"
          className="absolute right-3 top-0 h-64 w-40 rounded-lg object-cover shadow-2xl md:right-8 md:w-48"
        />
        <img
          src="https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
          alt="Spider-Man poster"
          className="absolute bottom-0 left-3 z-10 h-72 w-48 rounded-lg object-cover shadow-2xl md:left-8 md:w-60"
        />
        <span className="absolute left-1/2 top-1/2 z-20 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-xl">
          ▶
        </span>
      </div>
    </section>
  );
}
