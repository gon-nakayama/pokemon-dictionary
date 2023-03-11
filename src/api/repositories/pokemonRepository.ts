import { ApiClient } from "@/api/api-client";
import type { GetPokemon } from "@/api/models/pokemonModel";

/**
 * Respository層では、サーバ側から受領したレスポンスを
 * Modelで定義したフォーマットに整形する責務も持つ
 */
export type PokemonRepository = {
  getPokemons: () => Promise<GetPokemon[]>;
  searchPokemons: (
    params: Pick<GetPokemon, "name_ja">
  ) => Promise<GetPokemon[]>;
};

const getPokemons = async (): Promise<GetPokemon[]> => {
  const response = await ApiClient.get("searchPokemons/pokemons");

  return response.data;
};

const searchPokemons = async (
  params: Pick<GetPokemon, "name_ja">
): Promise<GetPokemon[]> => {
  const response = await ApiClient.post("/pokemons/search", {
    nameJa: { ...params },
  });

  return response.data;
};

export const pokemonRepository: PokemonRepository = {
  getPokemons,
  searchPokemons,
};
