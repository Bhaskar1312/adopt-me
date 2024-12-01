import { hydrate } from "react-dom";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

// render(
hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);