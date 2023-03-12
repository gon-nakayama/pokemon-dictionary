import type { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { pokemonFactory } from "@/api/models/pokemonModel";
import { mockPokemonRepository } from "@/api/repositories/mock/mockPokemonRepository";
import { Layout } from "@/layouts";
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

type AnswerProps = {
  pokemon?: GetPokemon;
};

const Answer = ({ pokemon }: AnswerProps) => {
  return (
    <>
      {pokemon ? (
        <Layout>
          <>
            <div className="mt-8 text-center font-mono text-2xl font-bold">
              正解は「{pokemon.name_ja}」でした
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
                className="animate-slide-in-bottom"
                src={pokemon.image_url}
                alt={pokemon.name_ja}
                width={350}
                height={350}
              />
            </div>
            <div className="flex justify-center">
              <Link
                href="/pokemon/quiz/1"
                className={clsx(
                  "mt-8 flex items-center justify-center rounded-full border border-gray-300 bg-blue-600 py-3 px-8 text-lg font-medium text-white shadow-sm hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
                )}
              >
                つぎのもんだいへすすむ
              </Link>
            </div>
          </>
        </Layout>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default Answer;
