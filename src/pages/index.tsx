import Image from "next/image";
import { fetchPokemons } from "@/lib/fetchPokemons";
import type { FetchPokemonResponse } from "@/types";

export async function getStaticProps() {
  const pokemons = await fetchPokemons();

  return {
    props: {
      pokemons,
    },
  };
}

type TopProps = {
  pokemons: FetchPokemonResponse[];
};

const Top = (props: TopProps) => {
  return (
    <>
      <div className="container my-5 px-8">
        <div className="flex justify-between">
          <h1
            className="basis-1/2 bg-gradient-to-r from-green-500 via-blue-500
        to-pink-500 bg-clip-text text-5xl font-bold
        tracking-tight text-transparent"
          >
            ポケモン図鑑
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-6 p-8">
        {props.pokemons.map((pokemon: FetchPokemonResponse, index: number) => (
          <a key={index} href={`/pokemon/${encodeURIComponent(pokemon.id)}`}>
            <Image
              className="animate-slide-in-bottom"
              src={pokemon.image}
              alt={pokemon.name}
              width={200}
              height={200}
            />
            <div className="text-center">{pokemon.name}</div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Top;
