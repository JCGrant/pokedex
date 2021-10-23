import PokemonCard from "../PokemonCard";

const NUM_POKEMON_TO_RENDER = 150;

export default function HomePage() {
  return (
    <div>
      {Array.from({ length: NUM_POKEMON_TO_RENDER }).map((_, i) => {
        const id = i + 1;
        return <PokemonCard id={id} />;
      })}
    </div>
  );
}
