import { pokemonRepository } from "@/api/repositories/pokemonRepository";
import type { PokemonRepository } from "@/api/repositories/pokemonRepository";

export type TopView = {
  entry_number: number;
  name_ja: string;
  image_url: string;
  types: string;
};

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
    showTop: async (): Promise<TopView[]> => {
      return await repository.getPokemonsTopView();
    },
    showOne: async (
      params: Pick<GetPokemon, "entry_number">
    ): Promise<GetPokemon> => {
      return await repository.getPokemon({ ...params });
    },
    show: async (): Promise<GetPokemon[]> => {
      return await repository.getPokemons();
    },
    search: async (
      params: Pick<GetPokemon, "name_ja">
    ): Promise<GetPokemon[]> => {
      return await repository.searchPokemons({ ...params });
    },
  };
};
