import "./App.css";
import NumberCounter from "./Components/Numbers";
import { useState } from "react";
import PokeImg from "./Components/FetchApiName";

function App() {
  const [state, setstate] = useState(null);

  return (
    <div className="App">
      <NumberCounter />
      <div>
        <PokeImg />
      </div>
    </div>
  );
}

export default App;
