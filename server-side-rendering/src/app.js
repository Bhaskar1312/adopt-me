
import { Routes, Route, Link} from "react-router-dom";
import SearchParams from "./SearchParams";
import {StrictMode, useState} from "react";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
    const theme = useState("darkblue"); // ThemeContext.Provider value provides context for all its children

  return (
      <>
          <ThemeContext.Provider value={theme}>
        {/*<BrowserRouter>*/}
          <header>
            <Link to="/">Adopt me</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        {/*</BrowserRouter>*/}
        <div>
        </div>
          </ThemeContext.Provider>
      </>
  );
};

export default App;
