import HomePage from "./components/pages/HomePage";
import SinglePokemonPage from "./components/pages/SinglePokemonPage";

export const routes = {
  "/": () => <HomePage />,
  "/pokemon/:id": ({ id }) => <SinglePokemonPage id={id} />,
};
