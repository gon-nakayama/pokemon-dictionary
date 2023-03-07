import Image from "next/image";
import Link from "next/link";
import { fetchPokemon, fetchPokemons } from "@/lib/fetchPokemons";
import { translatePokemonType } from "@/lib/translator";
import Rating from "@/pages/components/Rating";
import type { FetchPokemonResponse } from "@/types";

type PokemonProps = {
  pokemon: FetchPokemonResponse;
};

const PokemonDetail = ({ pokemon }: PokemonProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
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
        <div className="mx-auto mt-8 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <div className="flex p-5">
            <div className="w-32 flex-auto">
              <div className="self-center text-2xl text-white">HP</div>
            </div>
            <div className="w-64 flex-auto">
              <Rating />
            </div>
          </div>
          <div className="flex p-5">
            <div className="w-32 flex-initial">
              <div className="self-center text-2xl text-white">こうげき</div>
            </div>
            <div className="w-64 flex-initial">
              <Rating />
            </div>
          </div>
          <div className="flex p-5">
            <div className="w-32 flex-initial">
              <div className="self-center text-2xl text-white">ぼうぎょ</div>
            </div>
            <div className="w-64 flex-initial">
              <Rating />
            </div>
          </div>
          <div className="flex p-5">
            <div className="w-32 flex-initial">
              <div className="self-center text-2xl text-white">とくこう</div>
            </div>
            <div className="w-64 flex-initial">
              <Rating />
            </div>
          </div>
          <div className="flex p-5">
            <div className="w-32 flex-initial">
              <div className="self-center text-2xl text-white">とくぼう</div>
            </div>
            <div className="w-64 flex-initial">
              <Rating />
            </div>
          </div>
          <div className="flex p-5">
            <div className="w-32 flex-initial">
              <div className="self-center text-2xl text-white">すばやさ</div>
            </div>
            <div className="w-64 flex-initial">
              <Rating />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link
          type="button"
          href="/"
          className="mr-2 mb-2 rounded-full bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 px-5 py-2.5 text-center text-2xl font-medium text-gray-900 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800"
        >
          前ページへ戻る
        </Link>
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
