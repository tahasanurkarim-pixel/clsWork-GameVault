import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Picks the badge color for a status (same colors as the Library page).
function getBadgeColor(status) {
  if (status === "Playing") {
    return "bg-amber-400/15 text-amber-300";
  } else if (status === "Completed") {
    return "bg-emerald-400/15 text-emerald-300";
  } else {
    return "bg-slate-700/60 text-slate-300";
  }
}

// Page 3: shows all the details of one game.
function GameDetails(props) {
  const games = props.games;
  const navigate = useNavigate();

  // Read the id from the URL. For "/game/1", params.id is "1".
  const params = useParams();

  // Find the game with that id.
  // The URL id is text, so we turn game.id into text too before comparing.
  const game = games.find((item) => String(item.id) === params.id);

  // Go back to the Library.
  function goBack() {
    navigate("/");
  }

  // If no game has this id, show a message and the back button.
  if (game === undefined) {
    return (
      <div className="mx-auto max-w-xl px-4 py-10">
        <h1 className="text-2xl font-bold">Game not found</h1>
        <Button className="mt-6" variant="outline" onClick={goBack}>
          Back to Library
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <Card className="rounded-md ring-slate-800">
        <CardContent>
          <Badge className={getBadgeColor(game.status)}>{game.status}</Badge>
          <h1 className="mt-3 text-3xl font-bold">{game.title}</h1>
          <p className="mt-1 text-slate-400">{game.studio}</p>

          <p className="mt-6 text-sm text-slate-400">
            <span className="font-semibold text-slate-100">Platform:</span> {game.platform}
          </p>
          <p className="mt-1 text-sm text-slate-400">
            <span className="font-semibold text-slate-100">Release Year:</span> {game.releaseYear}
          </p>

          <p className="mt-6 text-slate-300">{game.description}</p>
        </CardContent>
      </Card>

      <Button className="mt-6" variant="outline" onClick={goBack}>
        Back to Library
      </Button>
    </div>
  );
}

export default GameDetails;
