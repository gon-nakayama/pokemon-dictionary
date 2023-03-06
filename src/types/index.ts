import type { PokemonType } from "pokenode-ts";

export type FetchPokemonResponse = {
  id: string;
  index: number;
  name: string;
  flavorText: string;
  image: string;
  genus: string;
  types: PokemonType[];
  height: number;
  weight: number;
};
