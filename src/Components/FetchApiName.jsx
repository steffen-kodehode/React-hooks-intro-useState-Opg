import { useState, useEffect } from "react";
// https://pokeapi.co/api/v2/pokemon

async function fetchAPI(callback) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();

  callback(data);
}

const PokeName = (props) => {
  const { data } = props;

  const [fetchedAPI, setFetchedAPI] = useState(null);

  useEffect(() => {
    console.log("This effect is run");

    fetchAPI(setFetchedAPI);
    console.log(fetchedAPI);
  }, []);
  return (
    <div>
      <h3>{fetchedAPI && fetchedAPI.results[0].name}</h3>
    </div>
  );
};

export default PokeName;
