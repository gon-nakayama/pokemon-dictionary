import type { GetServerSideProps } from "next";
import Image from "next/image";
import Router from "next/router";
import { pokemonFactory } from "@/api/models/pokemonModel";
import { mockPokemonRepository } from "@/api/repositories/mock/mockPokemonRepository";
import { ABILITIES } from "@/constants";
import { Layout } from "@/layouts/";
import Ability from "@/components/Ability";
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

const Pokemon = ({ pokemon }: PokemonProps) => {
  const handler = async () => {
    await Router.push("/");
  };

  return (
    <>
      {pokemon ? (
        <Layout>
          <>
            <h5 className="mt-4 mb-2 text-center text-2xl font-semibold tracking-tight text-gray-900">
              {pokemon.name_ja}
            </h5>
            <h5 className="mb-2 text-center text-lg font-semibold tracking-tight text-gray-900">
              （英: {pokemon.name}）
            </h5>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <Image
                style={{ backgroundColor: "#e4e4e7" }}
                className="animate-slide-in-bottom"
                src={pokemon.image_url}
                alt={pokemon.name_ja}
                width={350}
                height={350}
              />
            </div>
            <p className="my-3 p-6 font-normal text-gray-900 md:text-center">
              {pokemon.flavor_text}
            </p>
            <div className="">
              <div className="m-4 max-w-sm rounded-lg border border-gray-600 bg-white p-4">
                <p className="mb-4 font-mono text-xl font-medium text-gray-900">
                  のうりょく
                </p>
                <div className="">
                  <div>
                    <Ability text={ABILITIES.HP} value={pokemon.hp} />
                    <Ability text={ABILITIES.ATACK} value={pokemon.attack} />
                    <Ability text={ABILITIES.DEFENSE} value={pokemon.defense} />
                    <Ability
                      text={ABILITIES.SP_ATK}
                      value={pokemon.special_attack}
                    />
                    <Ability
                      text={ABILITIES.SP_DEF}
                      value={pokemon.special_defense}
                    />
                    <Ability text={ABILITIES.AGILITY} value={pokemon.speed} />
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-row">
                <div className="mx-4 mt-4 w-96 flex-initial rounded-lg border border-gray-600 bg-white p-4">
                  <p className="mb-4 font-mono text-xl font-medium text-gray-900">
                    T.B.D
                  </p>
                  <div className="h-96 w-32">
                    <div>
                      <p>分類</p>
                      <p>タイプ</p>
                      <p>高さ/重さ</p>
                      <p>特性</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </>
        </Layout>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default Pokemon;
