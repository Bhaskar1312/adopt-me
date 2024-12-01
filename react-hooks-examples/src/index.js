import State from "./State";
import StateComponent from "./State";
import EffectComponent from "./Effect";
import ContextComponent from "./Context";
import { render } from "react-dom";
import RefComponent from "./Ref";
import ReducerComponent from "./Reducer";
import MemoComponent from "./Memo";
import CallbackComponent from "./Callback";

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
          <RefComponent />
          <hr />
          <ReducerComponent />
          <hr />
          <MemoComponent />
          <hr />
          <CallbackComponent />
          <hr />
      </div>
    );
}
render(<App />, document.getElementById("root"));