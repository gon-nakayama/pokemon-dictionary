import type { FetchPokemonResponse } from "@/types";
import type { PokemonSpeciesDexEntry, Name, Genus } from "pokenode-ts";

export const fetchPokemon = async (
  id: string
): Promise<FetchPokemonResponse> => {
  const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonData = await pokemonRes.json();

  const speciesRes = await fetch(pokemonData.species.url);
  const speciesData = await speciesRes.json();

  return {
    id: pokemonData.name,
    index: speciesData.pokedex_numbers.find(
      (data: PokemonSpeciesDexEntry) => data.pokedex.name === "national"
    ).entry_number,
    name: speciesData.names.find(
      (data: Name) => data.language.name === "ja-Hrkt"
    ).name,
    flavorText: speciesData["flavor_text_entries"].find(
      (x: { language: { name: string } }) => x.language.name === "ja-Hrkt"
    ).flavor_text,
    image: pokemonData.sprites.other["official-artwork"]["front_default"],
    genus: speciesData.genera.find(
      (data: Genus) => data.language.name === "ja-Hrkt"
    ).genus,
    types: pokemonData.types,
    height: pokemonData.height,
    weight: pokemonData.weight,
  };
};

export const fetchPokemons = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=700&offset=0";
  const res = await fetch(url);
  const data = await res.json();
  const results = data.results;

  const dataPromise = [];
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    dataPromise.push(fetchPokemon(result.name));
  }

  return await Promise.all(dataPromise);
};
