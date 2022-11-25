import { useState, useEffect, useContext } from "react";
import Context from "../context/MyContext";

// https://pokeapi.co/api/v2/pokemon

// url = "https://pokeapi.co/api/v2/pokemon";

const PokeInfo = () => {
  const [fetchedAPI, setFetchedAPI] = useState(null);
  const [pokemonNMB, setPokemonNMB] = useState(1);

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonNMB}/`
      );
      const data = await response.json();

      setFetchedAPI(data);
    }

    fetchAPI();
  }, [pokemonNMB]);

  const PrevBtnCond = () => {
    if (pokemonNMB > 1) {
      setPokemonNMB((oldNMB) => oldNMB - 1);
    } else setPokemonNMB(1);
  };

  return (
    <div>
      <h3 id="PokeName">{fetchedAPI && fetchedAPI.id}</h3>
      <h3 id="PokeName">{fetchedAPI && fetchedAPI.name}</h3>
      <img
        src={fetchedAPI && fetchedAPI.sprites.front_default}
        alt={fetchedAPI && fetchedAPI.name}
      />
      <div>
        <button id="pokeBTNprev" onClick={() => PrevBtnCond()}>
          Prev
        </button>
        <button
          id="pokeBTNnext"
          onClick={() => setPokemonNMB((oldNMB) => oldNMB + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokeInfo;

////////////////////////////////////////////////////////////////////////
/* 
Example of a the way to go trough the list of pokémons

const PokemonImageURL = () => {
    const [ pokemonID, setPokemonID ] = useState(1);
    const [ pokemonData, setPokemonData ] = useState(null);

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
            const data = await response.json();

            setPokemonData(data);
        };

        getData();
    }, [pokemonID])

    return (
        <div>
            <h1>Pokemon</h1>

            <img src={pokemonData && pokemonData.sprites.front_default} />

            <button
                onClick={() => setPokemonID((oldID) => oldID + 1)}
            >
                Next
            </button>
            
        </div>
    )
}; 
*/

///////////////////////////////////////////////////////////////////////
