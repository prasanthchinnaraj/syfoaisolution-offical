# Syfo AI Solution — Website

Official marketing site for Syfo AI Solution, built with **Vite + React**.

## Tech stack
- **Vite** (build tool / dev server)
- **React 18**
- Plain CSS (global styles in `src/index.css`)

## Getting started
```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build locally
```

## Project structure
```
index.html              # Vite entry — SEO meta tags + JSON-LD + #root mount
public/                 # static assets served at site root
  logo.png              # brand logo (transparent)
  favicon.ico, favicon-16.png, favicon-32.png, apple-touch-icon.png
  icon-192.png, icon-512.png, site.webmanifest, robots.txt, sitemap.xml
src/
  main.jsx              # React entry, imports index.css
  App.jsx               # page composition + modal state
  index.css             # global styles / design tokens
  hooks/
    useScrollReveal.js  # IntersectionObserver fade-in
  components/
    Navbar.jsx  Hero.jsx  NeuralCanvas.jsx  WhySyfo.jsx  Services.jsx
    Stats.jsx   Process.jsx  Faq.jsx  Cta.jsx  Footer.jsx  StrategyModal.jsx
```

## Configuration
The strategy-call form posts to the backend API. Override the endpoint with an
env var (otherwise it falls back to the production URL):
```bash
# .env
VITE_STRATEGY_API_URL=https://your-backend.example.com/api/book-strategy
```
