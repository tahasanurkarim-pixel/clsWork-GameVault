# VAULT – My AAA Game Collection

VAULT is a small React web app where I keep my collection of big AAA story games
(like Red Dead Redemption 2, The Last of Us Part II and GTA VI).
I can add games and see the details of each one. Everything is saved in the browser with localStorage.

**Live demo:** https://tahasanurkarim-pixel.github.io/clsWork-GameVault/

## Features

- **Library page** – shows all games as cards, plus 3 stats: Total Games, Playing, Completed
- **Add Game page** – a form to add a game (title, studio, release year, platform, status, description)
- **Game Details page** – shows all the information about one game
- **Saved in the browser** – games stay after a page refresh (localStorage)
- **Starter games** – 3 sample games are shown the first time the app opens
- **Responsive** – 1 column on mobile, 2 on tablet, 3 on desktop

## Technologies

- React + Vite
- JavaScript (JSX)
- Tailwind CSS
- shadcn/ui (Button, Card, Input, Select, Textarea, Badge, Label)
- React Router DOM
- React hooks: useState, useEffect, useNavigate, useParams
- localStorage

## How to install and run

1. Clone the repository and open the folder:

   ```bash
   git clone https://github.com/tahasanurkarim-pixel/clsWork-GameVault.git
   cd clsWork-GameVault
   ```

2. Install the packages:

   ```bash
   npm install
   ```

3. Start the app:

   ```bash
   npm run dev
   ```

4. Open the link shown in the terminal (usually http://localhost:5173).

## Project structure

```
src/
  main.jsx            Starts the app and wraps it in BrowserRouter
  App.jsx             Holds the games list, saves to localStorage, defines the routes
  index.css           Tailwind + shadcn theme (navy and amber colors)
  pages/
    Library.jsx       Page 1: stats and game cards
    AddGame.jsx       Page 2: form to add a game
    GameDetails.jsx   Page 3: details of one game
  components/ui/      shadcn/ui components (generated)
  lib/utils.js        shadcn helper (generated)
```

## Screenshot

_Screenshot coming soon._
