import "./App.css";
import NumberCounter from "./Components/Numbers";
import { useState } from "react";
import PokeName from "./Components/FetchApiName";

function App() {
  const [state, setstate] = useState(null);

  return (
    <div className="App">
      <NumberCounter />
      <div>
        <PokeName />
      </div>
    </div>
  );
}

export default App;
