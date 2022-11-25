import "./App.css";
import NumberCounter from "./Components/Numbers";
import { useState, useContext } from "react";
import PokeInfo from "./Components/FetchAPIInfo";

function App() {
  const [state, setState] = useState(null);

  return (
    <div className="App">
      <NumberCounter />
      <div>
        <PokeInfo />
      </div>
    </div>
  );
}

export default App;
