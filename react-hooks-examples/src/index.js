import State from "./State";
import StateComponent from "./State";
import EffectComponent from "./Effect";
import { render } from "react-dom";

function App() {
    return(
      <div className="App">
          <StateComponent/>
          <State/>
          <EffectComponent />
          <hr />
      </div>
    );
}
render(<App />, document.getElementById("root"));