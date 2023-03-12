import type { GetServerSideProps } from "next";
import Image from "next/image";
import { pokemonFactory } from "@/api/models/pokemonModel";
import { mockPokemonRepository } from "@/api/repositories/mock/mockPokemonRepository";
import { Layout } from "@/layouts/";
import type { GetPokemon } from "@/api/models/pokemonModel";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const pokemon = await pokemonFactory(mockPokemonRepository).showOne({
    entry_number: Number(id),
  });

  return {
    props: { pokemon },
  };
};

type PokemonProps = {
  pokemon?: GetPokemon;
};

const Quiz = ({ pokemon }: PokemonProps) => {
  return (
    <>
      {pokemon ? (
        <Layout>
          <>
            <div className="mt-8 text-center font-mono text-2xl">
              このポケモンはだれかな？
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <Image
                className="animate-slide-in-bottom brightness-0"
                src={pokemon.image_url}
                alt={pokemon.name_ja}
                width={350}
                height={350}
              />
            </div>
            <div className="grid grid-cols-4 justify-center text-center md:flex md:flex-row">
              <div className="col-span-4 mx-4 my-2 md:w-full">
                <div className="rounded-full border bg-blue-700 p-2 text-center text-white hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 md:flex-1">
                  ピカチュウ
                </div>
              </div>
              <div className="col-span-4 mx-4 my-2 md:w-full">
                <div className="rounded-full border bg-blue-700 p-2 text-center text-white hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 md:flex-1">
                  ヒトカゲ
                </div>
              </div>
              <div className="col-span-4 mx-4 my-2 md:w-full">
                <div className="rounded-full border bg-blue-700 p-2 text-center text-white hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 md:flex-1">
                  フシギダネ
                </div>
              </div>
              <div className="col-span-4 mx-4 my-2 md:w-full">
                <div className="rounded-full border bg-blue-700 p-2 text-center text-white hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 md:flex-1">
                  ゼニガメ
                </div>
              </div>
            </div>
          </>
        </Layout>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default Quiz;
