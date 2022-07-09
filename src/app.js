import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <Pet name = "Luna" animal = "dog" breed="Havanese" />
      <Pet name = "Pepper" animal = "bird" breed="Cockateil" />
      <Pet name = "Doink" animal = "cat" breed="Mix" />
    </div>
  )
}

render(<App />, document.getElementById("root"));
