import { A } from "hookrouter";
import { usePokemon } from "../hooks/pokemon";

export default function PokemonCard({ id }) {
  const pokemon = usePokemon(id);
  if (!pokemon) {
    return <></>;
  }
  return (
    <div className="pokemon-card">
      <div>
        <A key={id} href={`/pokemon/${id}`}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </A>
      </div>
      <p>{pokemon.name}</p>
    </div>
  );
}
