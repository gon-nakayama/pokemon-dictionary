import { useState } from "react";
import { pokemonFactory } from "@/api/models/pokemonModel";
import { mockPokemonRepository } from "@/api/repositories/mock/mockPokemonRepository";
import { useFetchTopView } from "@/hooks";
import { Layout } from "@/layouts";
import PokemonList from "@/components/PokemonList";
import type { TopView } from "@/api/models/pokemonModel";

const Top = () => {
  // TODO getServerSidePropsで実装したい
  const { topViewPokemons } = useFetchTopView();

  const [searchResPokemons, setSearchResPokemons] = useState<TopView[]>([]);
  const search = async (nameJa: string) => {
    setSearchResPokemons(
      await pokemonFactory(mockPokemonRepository).search({
        name_ja: nameJa,
      })
    );
  };

  return (
    <Layout search={search}>
      <div className="grid grid-cols-3 gap-6 p-8 md:grid-cols-6">
        {searchResPokemons.length > 0 ? (
          <>
            {searchResPokemons.map((pokemon: TopView, index: number) => (
              <PokemonList key={index} pokemon={pokemon} />
            ))}
          </>
        ) : (
          <>
            {topViewPokemons.map((pokemon: TopView, index: number) => (
              <PokemonList key={index} pokemon={pokemon} />
            ))}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Top;
