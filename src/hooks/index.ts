import { useState } from "react";
import { useAsync } from "react-use";
import { pokemonFactory } from "@/api/models/pokemonModel";
import { mockPokemonRepository } from "@/api/repositories/mock/mockPokemonRepository";
import type { GetPokemon } from "@/api/models/pokemonModel";

export const useFetchPokemons = () => {
  const [pokemons, setPokemons] = useState<GetPokemon[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useAsync(async () => {
    try {
      const data = await pokemonFactory(mockPokemonRepository).show();
      setPokemons(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  }, []);

  return {
    pokemons,
    isFetching,
  };
};
