import Image from "next/image";
import { useFetchPokemons } from "@/hooks";
import { Layout } from "@/layouts";
import type { GetPokemon } from "@/api/models/pokemonModel";

const Home = () => {
  const { pokemons } = useFetchPokemons();
  console.log({ pokemons });

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-6 p-8 md:grid-cols-6">
        {pokemons.map((pokemon: GetPokemon, index: number) => (
          <a key={index} href={`/pokemon/${encodeURIComponent(pokemon.id)}`}>
            <Image
              className="animate-slide-in-bottom"
              src={pokemon.image_url}
              alt={pokemon.name_ja}
              width={200}
              height={200}
            />
            <div className="text-center">{pokemon.name_ja}</div>
          </a>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
