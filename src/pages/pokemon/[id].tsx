import Image from "next/image";
import { fetchPokemon, fetchPokemons } from "@/lib/fetchPokemons";
import { translatePokemonType } from "@/lib/translator";
import type { FetchPokemonResponse } from "@/types";

type PokemonProps = {
  pokemon: FetchPokemonResponse;
};

const PokemonDetail = ({ pokemon }: PokemonProps) => {
  return (
    <>
      <h1>{pokemon.name}のページです</h1>
      <p>分類：{pokemon.genus}</p>
      <p>
        タイプ：：
        {pokemon.types
          .map((t: { type: { name: string } }) =>
            translatePokemonType(t.type.name as "grass" | "poison")
          )
          .join(" ")}
      </p>
      <p>
        高さ： {pokemon.height}m 重さ： {pokemon.weight}kg
      </p>
      <p>特性：{pokemon.flavorText}</p>
      <Image
        className="animate-slide-in-bottom"
        src={pokemon.image}
        alt={pokemon.name}
        width={200}
        height={200}
      />
    </>
  );
};

export async function getStaticPaths() {
  const pokemons = await fetchPokemons();

  return {
    paths: pokemons.map((pokemon) => ({
      params: { id: pokemon.id },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { id: string } }) {
  const id = context.params.id;
  const pokemon = await fetchPokemon(id);

  return {
    props: {
      pokemon,
    },
  };
}

export default PokemonDetail;
