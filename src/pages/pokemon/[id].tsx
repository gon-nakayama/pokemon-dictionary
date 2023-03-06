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
      <div className="mx-auto mt-8 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-center">
          <span className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
            {pokemon.name}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            className="animate-slide-in-bottom"
            src={pokemon.image}
            alt={pokemon.name}
            width={200}
            height={200}
          />
        </div>
        <div className="flex items-center justify-center">
          <span className="mt-3 text-2xl font-bold text-gray-500 dark:text-white">
            分類：{pokemon.genus}
          </span>
        </div>
        <div className="text-left">
          <div className="mt-2.5 mb-5 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-500 dark:text-white">
              タイプ：
            </span>
            {pokemon.types.map((t: { type: { name: string } }, index) => (
              <span
                key={index}
                className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800"
              >
                {translatePokemonType(t.type.name)}
              </span>
            ))}
          </div>
        </div>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
              {pokemon.flavorText}
            </h5>
          </a>
        </div>
      </div>
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
