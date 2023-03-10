import { ApiClient } from "@/api/api-client";
import type { GetPokemon, TopView } from "@/api/models/pokemonModel";

/**
 * Respository層では、サーバ側から受領したレスポンスを
 * Modelで定義したフォーマットに整形する責務も持つ
 */

export type PokemonRepository = {
  getPokemons: () => Promise<GetPokemon[]>;
  searchPokemons: (params: Pick<TopView, "name_ja">) => Promise<TopView[]>;
  getPokemonsTopView: () => Promise<TopView[]>;
  getPokemon: (
    params: Pick<GetPokemon, "entry_number">
  ) => Promise<GetPokemon | undefined>;
};

const getPokemonsTopView = async (): Promise<TopView[]> => {
  const response = await ApiClient.get("/pokemons?mode=topView");

  return response.data;
};

const getPokemons = async (): Promise<GetPokemon[]> => {
  const response = await ApiClient.get("searchPokemons/pokemons");

  return response.data;
};

const getPokemon = async (
  params: Pick<GetPokemon, "entry_number">
): Promise<GetPokemon | undefined> => {
  const response = await ApiClient.get(`/pokemons/${params.entry_number}`);

  return response.data;
};

const searchPokemons = async (
  params: Pick<TopView, "name_ja">
): Promise<TopView[]> => {
  const response = await ApiClient.post("/pokemons/search", {
    nameJa: { ...params },
  });

  return response.data;
};

export const pokemonRepository: PokemonRepository = {
  getPokemons,
  searchPokemons,
  getPokemonsTopView,
  getPokemon,
};
