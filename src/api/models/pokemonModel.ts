import { pokemonRepository } from "@/api/repositories/pokemonRepository";
import type { PokemonRepository } from "@/api/repositories/pokemonRepository";

export type GetPokemon = {
  id: number;
  name: string;
  name_ja: string;
  entry_number: number;
  flavor_text: string;
  genus: string;
  image_url: string;
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  height: number;
  weight: number;
  types: string;
};

export const pokemonFactory = (rep?: PokemonRepository) => {
  // 引数があればモックデータを返す。引数がなければサーバにデータを取得しに行く
  const repository = rep ?? pokemonRepository;

  return {
    show: async (): Promise<GetPokemon[]> => {
      const response = await repository.getPokemons();

      return response;
    },
    search: async (
      params: Pick<GetPokemon, "name_ja">
    ): Promise<GetPokemon[]> => {
      const response = await repository.searchPokemons({ ...params });

      return response;
    },
  };
};
