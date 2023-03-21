import React, { useState, useEffect } from "react";

function GetPokemonData({ pokemonLink }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(pokemonLink)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [pokemonLink]);

  if (error) {
    return <div>Nothing Found</div>;
  } else if (!isLoaded) {
    return <div>Loading Data....</div>;
  } else {
    return (
      <>
        <img src={items.sprites.front_default} alt="Thumbnail" />
        <h1>{items.name}</h1>
        <h4>Abilities:</h4>
        <ul>
          {items.abilities.map((item, index) => (
            <li key={index}>{item.ability.name}</li>
          ))}
        </ul>
        <h4>Types:</h4>
        <ul>
          {items.types.map((item, index) => (
            <li key={index}>{item.type.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default React.memo(GetPokemonData);
