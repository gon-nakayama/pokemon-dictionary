import Image from "next/image";
import { fetchPokemons } from "@/lib/fetchPokemons";
import Header from "@/components/Header";
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

const Top = ({ pokemons }: TopProps) => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-6 p-8 md:grid-cols-6">
        {pokemons.map((pokemon: FetchPokemonResponse, index: number) => (
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
