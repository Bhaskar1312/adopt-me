import { render } from "react-dom";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import SearchParams from "./SearchParams";
import {StrictMode} from "react";
import Details from "./Details";

const App = () => {
  return (
      <>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt me</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
        <div>
        </div>
      </>
  );
};

render(<App />, document.getElementById("root"));
