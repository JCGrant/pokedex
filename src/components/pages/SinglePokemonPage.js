import { A } from "hookrouter";
import PokemonCard from "../PokemonCard";

export default function SinglePokemonPage({ id }) {
  return (
    <div>
      <div>
        <PokemonCard id={id} />
      </div>
      <A href="/">Go back</A>
    </div>
  );
}
