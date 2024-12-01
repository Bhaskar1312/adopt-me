import { render } from "react-dom";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import {Provider} from "react-redux";
import store from "./store";
import { StrictMode } from "react";


const App = () => {
  return (
      <StrictMode>
          <Provider store={store}>
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
          </Provider>
      </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
