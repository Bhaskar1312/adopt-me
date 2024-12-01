import State from "./State";
import StateComponent from "./State";
import EffectComponent from "./Effect";
import ContextComponent from "./Context";
import { render } from "react-dom";
import RefComponent from "./Ref";
import ReducerComponent from "./Reducer";
import MemoComponent from "./Memo";
import CallbackComponent from "./Callback";
import LayoutEffectComponent from "./LayoutEffect";
import ImperativeHandleComponent from "./ImperativeHandle";

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
          <LayoutEffectComponent />
          <hr />
          <ImperativeHandleComponent />
          <hr />
      </div>
    );
}
render(<App />, document.getElementById("root"));