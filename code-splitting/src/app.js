import { render } from "react-dom";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {StrictMode, useState, lazy, Suspense } from "react";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details")); // parcel will automatically split the code into separate files
const SearchParams = lazy(() => import("./SearchParams"));
// lazy() function is used to dynamically import a component. It returns a promise that resolves to a module object with a default property that contains the component.

// const x = './ThemeContext';
// import ThemeContext from x; // doesn't work

// ThemeContext = require(x); // used to work??

const App = () => {
    const theme = useState("darkblue"); // ThemeContext.Provider value provides context for all its children

  return (
      <>
          <ThemeContext.Provider value={theme}>
            <Suspense fallback={<h2>Be Patient</h2>}>
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
            </Suspense>
          </ThemeContext.Provider>
      </>
  );
};

render(<App />, document.getElementById("root"));
