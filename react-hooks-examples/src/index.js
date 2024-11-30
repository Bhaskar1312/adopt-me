import State from "./State";
import StateComponent from "./State";
import EffectComponent from "./Effect";
import ContextComponent from "./Context";
import { render } from "react-dom";

function App() {
    return(
      <div className="App">
          <StateComponent/>
          <State/>
          <hr />
          <EffectComponent />
          <hr />
          <ContextComponent />
          <hr />
      </div>
    );
}
render(<App />, document.getElementById("root"));