# Movies Bazer — React + TypeScript

A responsive movie discovery interface built with React, TypeScript, Vite, and Tailwind CSS v4.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── MovieCard.tsx
│   ├── MovieSection.tsx
│   └── Navbar.tsx
├── data/
│   └── movies.ts
├── App.tsx
├── index.css
├── main.tsx
└── types.ts
```

## Notes
- Movie search filters both movie sections as you type.
- Components are reusable and typed with TypeScript interfaces.
- Poster images use TMDB image paths. Some supplied poster paths may need replacing if they no longer resolve.
- This is a frontend demonstration; it does not stream or download movies and does not yet use a live TMDB API.
