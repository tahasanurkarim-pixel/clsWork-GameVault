import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// Page 2: a form to add a new game.
function AddGame(props) {
  const navigate = useNavigate();

  // One state for each form field.
  // Platform and status start with a default choice.
  const [title, setTitle] = useState("");
  const [studio, setStudio] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [platform, setPlatform] = useState("PS5");
  const [status, setStatus] = useState("Wishlist");
  const [description, setDescription] = useState("");

  // Runs when the form is submitted ("Add to Vault" button).
  function handleAddGame(event) {
    // Stop the browser from reloading the page.
    event.preventDefault();

    // The title is required. If it is empty, warn and stop here.
    if (title.trim() === "") {
      alert("Please enter a game title.");
      return;
    }

    // Build the new game object. Date.now() gives a unique number for the id.
    const newGame = {
      id: Date.now(),
      title: title,
      studio: studio,
      releaseYear: releaseYear,
      platform: platform,
      status: status,
      description: description,
    };

    // Send the game up to App.jsx, then go back to the Library.
    props.addGame(newGame);
    navigate("/");
  }

  // Go back to the Library without adding anything.
  function goBack() {
    navigate("/");
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <Card className="rounded-md ring-slate-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add Game</CardTitle>
          <CardDescription>Fill in the details of your game.</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleAddGame} className="flex flex-col gap-5">
            {/* Game Title */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Game Title</Label>
              <Input
                id="title"
                placeholder="e.g. God of War"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>

            {/* Studio */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="studio">Studio</Label>
              <Input
                id="studio"
                placeholder="e.g. Santa Monica Studio"
                value={studio}
                onChange={(event) => setStudio(event.target.value)}
              />
            </div>

            {/* Release Year */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="releaseYear">Release Year</Label>
              <Input
                id="releaseYear"
                type="number"
                placeholder="e.g. 2018"
                value={releaseYear}
                onChange={(event) => setReleaseYear(event.target.value)}
              />
            </div>

            {/* Platform: Select gives us the chosen value, and we store it */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="platform">Platform</Label>
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger id="platform" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PS5">PS5</SelectItem>
                  <SelectItem value="Xbox Series X|S">Xbox Series X|S</SelectItem>
                  <SelectItem value="PC">PC</SelectItem>
                  <SelectItem value="PS4">PS4</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="status">Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger id="status" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Wishlist">Wishlist</SelectItem>
                  <SelectItem value="Playing">Playing</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Short Description */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Short Description</Label>
              <Textarea
                id="description"
                placeholder="What is the game about?"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <Button type="submit">Add to Vault</Button>
              <Button type="button" variant="outline" onClick={goBack}>
                Back to Library
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddGame;
