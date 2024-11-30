import State from "./State";
import StateComponent from "./State";
import { render } from "react-dom";

function App() {
    return(
      <div className="App">
          <StateComponent/>
          <State/>
          <hr />
      </div>
    );
}
render(<App />, document.getElementById("root"));