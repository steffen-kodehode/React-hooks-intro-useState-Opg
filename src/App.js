import "./App.css";
import NumberCounter from "./Components/Numbers";
import { useState, useEffect } from "react";
import ExtraPokeInfo from "./Components/PokeAPIInfo";
import InfoContext from "./context/MyContext";

function App() {
  const [state, setState] = useState(null);
  const [pokemonNMB, setPokemonNMB] = useState(1);

  useEffect(() => {
    async function fetchInfo() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonNMB}/`
      );

      const data = await response.json();

      setState(data);
    }

    fetchInfo();
  }, [pokemonNMB]);

  const PrevBtnCond = () => {
    if (pokemonNMB > 1) {
      setPokemonNMB((oldNMB) => oldNMB - 1);
    } else setPokemonNMB(1);
  };

  return (
    <div className="App">
      <NumberCounter />
      <>
        <InfoContext.Provider value={state}>
          <ExtraPokeInfo />

          <button id="pokeBTNprev" onClick={() => PrevBtnCond()}>
            Prev
          </button>
          <button
            id="pokeBTNnext"
            onClick={() => setPokemonNMB((oldNMB) => oldNMB + 1)}
          >
            Next
          </button>
        </InfoContext.Provider>
      </>
    </div>
  );
}

export default App;
