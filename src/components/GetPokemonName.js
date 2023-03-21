import React, { useEffect, useState } from "react";
import PaginationPokemon from "./Pagination";
import "../assets/css/home.css";
import GetPokemonData from "./GetPokemonData";

export default function GetPokemons() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [offsetData, setOffsetData] = useState(0);
  let [pokemonLink, setPokemonLink] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offsetData}&limit=12`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [offsetData]);

  if (error) {
    return <div>Nothing Found</div>;
  } else if (!isLoaded) {
    return <div>Loading....</div>;
  } else {
    return (
      <>
        <div className="sidebar">
          {items.map((item) => (
            <h4 key={item.url} onClick={() => setPokemonLink(item.url)}>
              {item.name}
            </h4>
          ))}
          <PaginationPokemon
            offsetData={offsetData}
            setOffsetData={setOffsetData}
          />
        </div>

        <div className="pokemon-data">
          {pokemonLink && <GetPokemonData pokemonLink={pokemonLink} />}
        </div>
      </>
    );
  }
}
