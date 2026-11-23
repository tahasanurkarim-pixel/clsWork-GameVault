import { useNavigate } from "react-router-dom";
import { Gamepad2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Picks the badge color for a status:
// Playing = amber, Completed = emerald, Wishlist = gray.
function getBadgeColor(status) {
  if (status === "Playing") {
    return "bg-amber-400/15 text-amber-300";
  } else if (status === "Completed") {
    return "bg-emerald-400/15 text-emerald-300";
  } else {
    return "bg-slate-700/60 text-slate-300";
  }
}

// Page 1: shows the stats and all the game cards.
function Library(props) {
  const games = props.games;
  const navigate = useNavigate();

  // Count the games for the 3 stats cards.
  const totalGames = games.length;
  const playingGames = games.filter((game) => game.status === "Playing").length;
  const completedGames = games.filter((game) => game.status === "Completed").length;

  // Go to the Add Game page.
  function goToAddGame() {
    navigate("/add");
  }

  // Go to the details page of one game, for example "/game/1".
  function goToDetails(game) {
    navigate("/game/" + game.id);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Header: label, title, subtitle and the Add Game button */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold tracking-widest text-amber-400">
            <Gamepad2 className="size-5" />
            AAA COLLECTION
          </p>
          <h1 className="mt-2 text-5xl font-extrabold uppercase tracking-widest">
            Vault
          </h1>
          <p className="mt-2 text-slate-400">
            Every big story game I own, in one place.
          </p>
        </div>
        <Button size="lg" onClick={goToAddGame}>
          <Plus />
          Add Game
        </Button>
      </div>

      {/* Stats row: 3 small cards */}
      <div className="mt-8 grid grid-cols-3 gap-3">
        <Card className="rounded-md ring-slate-800">
          <CardContent>
            <p className="text-xs text-slate-400 uppercase">Total Games</p>
            <p className="mt-1 text-3xl font-bold">{totalGames}</p>
          </CardContent>
        </Card>
        <Card className="rounded-md ring-slate-800">
          <CardContent>
            <p className="text-xs text-slate-400 uppercase">Playing</p>
            <p className="mt-1 text-3xl font-bold">{playingGames}</p>
          </CardContent>
        </Card>
        <Card className="rounded-md ring-slate-800">
          <CardContent>
            <p className="text-xs text-slate-400 uppercase">Completed</p>
            <p className="mt-1 text-3xl font-bold">{completedGames}</p>
          </CardContent>
        </Card>
      </div>

      {/* If there are no games, show a message */}
      {games.length === 0 && (
        <p className="mt-10 text-center text-slate-400">
          Your vault is empty. Add your first game.
        </p>
      )}

      {/* Game cards: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <Card
            key={game.id}
            onClick={() => goToDetails(game)}
            className="cursor-pointer rounded-md ring-slate-800 transition-colors hover:ring-slate-600"
          >
            <CardContent>
              <Badge className={getBadgeColor(game.status)}>{game.status}</Badge>
              <h2 className="mt-3 text-lg font-semibold">{game.title}</h2>
              <p className="mt-2 text-sm text-slate-400">
                <span className="font-semibold text-slate-100">Studio:</span> {game.studio}
              </p>
              <p className="mt-1 text-sm text-slate-400">
                <span className="font-semibold text-slate-100">Platform:</span> {game.platform}
              </p>
            </CardContent>
            <CardFooter className="mt-auto bg-transparent">
              <span className="text-sm font-medium text-amber-400">View Details →</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Library;
