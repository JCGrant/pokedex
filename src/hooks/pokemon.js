import { useState, useEffect } from "react";
import { getPokemon } from "../api/pokemon";

export function usePokemon(id) {
  const [pokemon, setpokemon] = useState(undefined);
  useEffect(() => {
    getPokemon(id)
      .then((data) => {
        setpokemon(() => data);
      })
      .catch((reason) => {
        console.error(`fetching pokemon (${id}) failed: ${reason}`);
        setpokemon(undefined);
      });
  }, [id]);
  return pokemon;
}
