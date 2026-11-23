import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Library from "./pages/Library.jsx";
import AddGame from "./pages/AddGame.jsx";
import GameDetails from "./pages/GameDetails.jsx";

// Sample games shown the very first time the app opens,
// so the vault is not empty during the demo.
const starterGames = [
  {
    id: 1,
    title: "Red Dead Redemption 2",
    studio: "Rockstar Games",
    platform: "PS4",
    releaseYear: "2018",
    status: "Completed",
    description: "An outlaw story about Arthur Morgan and the Van der Linde gang in the dying Wild West.",
  },
  {
    id: 2,
    title: "The Last of Us Part II",
    studio: "Naughty Dog",
    platform: "PS4",
    releaseYear: "2020",
    status: "Playing",
    description: "Ellie sets out on a journey of revenge across a broken, post-pandemic America.",
  },
  {
    id: 3,
    title: "Grand Theft Auto VI",
    studio: "Rockstar Games",
    platform: "PS5",
    releaseYear: "2026",
    status: "Wishlist",
    description: "The next Grand Theft Auto, set in the state of Leonida.",
  },
];

// Reads the saved games from localStorage.
// If nothing is saved yet (first visit), use the starter games.
function loadGames() {
  const savedGames = localStorage.getItem("vault-games");
  if (savedGames === null) {
    return starterGames;
  }
  return JSON.parse(savedGames);
}

function App() {
  // The list of all games. React calls loadGames only once, on the first render,
  // so the saved games are loaded BEFORE anything is saved. This is why
  // saved data is never overwritten with an empty list.
  const [games, setGames] = useState(loadGames);

  // Save the games to localStorage every time the games list changes.
  // localStorage can only store text, so we turn the array into a JSON string.
  useEffect(() => {
    localStorage.setItem("vault-games", JSON.stringify(games));
  }, [games]);

  // Adds one new game to the end of the list.
  // We make a new array instead of changing the old one, so React re-renders.
  function addGame(newGame) {
    setGames([...games, newGame]);
  }

  // The 3 pages of the app. Each URL shows one page.
  return (
    <Routes>
      <Route path="/" element={<Library games={games} />} />
      <Route path="/add" element={<AddGame addGame={addGame} />} />
      <Route path="/game/:id" element={<GameDetails games={games} />} />
    </Routes>
  );
}

export default App;
