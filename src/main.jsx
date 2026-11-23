import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Start the React app inside the <div id="root"> in index.html.
// BrowserRouter wraps the whole app so every page can use routing.
// basename is the folder the app lives in: "/" on my computer,
// and "/clsWork-GameVault/" on the GitHub Pages live demo.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
