import { useContext } from "react";

import InfoContext from "../context/MyContext";

const ExtraPokeInfo = () => {
  const PokeInfoEx = useContext(InfoContext);

  return (
    <>
      <div>
        <h3 id="PokeName">{PokeInfoEx && PokeInfoEx.id}</h3>
        <h3 id="PokeName">{PokeInfoEx && PokeInfoEx.name}</h3>
      </div>

      <div>
        {PokeInfoEx && PokeInfoEx.sprites.front_default && (
          <img
            src={PokeInfoEx && PokeInfoEx.sprites.front_default}
            alt={PokeInfoEx && PokeInfoEx.name}
          />
        )}
      </div>
      <h3>
        Type
        <br />
        {PokeInfoEx && PokeInfoEx.types.map(({ type }) => type.name).join(" ")}
      </h3>
      {PokeInfoEx && PokeInfoEx.weight && (
        <h3>
          Weight
          <br />
          {PokeInfoEx.weight}
        </h3>
      )}
    </>
  );
};
export default ExtraPokeInfo;
