import "./App.css";
import NumberCounter from "./Components/Numbers";
import { useState } from "react";

function App() {
  const [state, setstate] = useState(null);

  return (
    <div className="App">
      <NumberCounter />
    </div>
  );
}

export default App;
