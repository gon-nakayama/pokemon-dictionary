import { useState } from "react";
import { useAsync } from "react-use";
import { pokemonFactory } from "@/api/models/pokemonModel";
import { mockPokemonRepository } from "@/api/repositories/mock/mockPokemonRepository";
import type { GetPokemon, TopView } from "@/api/models/pokemonModel";

export const useFetchTopView = () => {
  const [topViewPokemons, setTopViewPokemons] = useState<TopView[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useAsync(async () => {
    try {
      const data = await pokemonFactory(mockPokemonRepository).showTop();
      setTopViewPokemons(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  }, []);

  return {
    topViewPokemons,
    isFetching,
  };
};

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

export const useFetchPokemon = (entryNumber: number) => {
  const [pokemon, setPokemon] = useState<GetPokemon | undefined>(undefined);
  const [isFetching, setIsFetching] = useState(true);

  useAsync(async () => {
    try {
      const data = await pokemonFactory(mockPokemonRepository).showOne({
        entry_number: entryNumber,
      });
      setPokemon(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  }, []);

  return {
    pokemon,
    isFetching,
  };
};
