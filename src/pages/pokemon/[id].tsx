import type { GetServerSideProps } from "next";
import Image from "next/image";
import Router from "next/router";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import { pokemonFactory } from "@/api/models/pokemonModel";
import { mockPokemonRepository } from "@/api/repositories/mock/mockPokemonRepository";
import { ABILITIES } from "@/constants";
import { Layout } from "@/layouts/";
import { Button } from "@/components/Elements";
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
            <div className="flex w-64 justify-center">
              <div className="mx-4 mt-4 max-w-sm rounded-lg border border-gray-600 bg-white p-4">
                <p className="mb-4 font-mono text-xl font-medium text-gray-900">
                  のうりょく
                </p>
                <div className="gap-8 md:grid md:grid-cols-2">
                  <div>
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {ABILITIES.HP}
                      </dt>
                      <dd className="mb-3 flex items-center">
                        <div className="mr-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                          <div
                            className="h-2.5 rounded bg-blue-600"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {pokemon.hp}
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {ABILITIES.ATACK}
                      </dt>
                      <dd className="mb-3 flex items-center">
                        <div className="mr-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                          <div
                            className="h-2.5 rounded bg-blue-600"
                            style={{ width: "89%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {pokemon.attack}
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {ABILITIES.DEFENSE}
                      </dt>
                      <dd className="mb-3 flex items-center">
                        <div className="mr-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                          <div
                            className="h-2.5 rounded bg-blue-600"
                            style={{ width: "88%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {pokemon.defense}
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {ABILITIES.SP_ATK}
                      </dt>
                      <dd className="flex items-center">
                        <div className="mr-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                          <div
                            className="h-2.5 rounded bg-blue-600"
                            style={{ width: "54%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {pokemon.special_attack}
                        </span>
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {ABILITIES.SP_DEF}
                      </dt>
                      <dd className="mb-3 flex items-center">
                        <div className="mr-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                          <div
                            className="h-2.5 rounded bg-blue-600"
                            style={{ width: "89%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {pokemon.special_defense}
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {ABILITIES.AGILITY}
                      </dt>
                      <dd className="mb-3 flex items-center">
                        <div className="mr-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                          <div
                            className="h-2.5 rounded bg-blue-600"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {pokemon.speed}
                        </span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mx-4 mt-4 max-w-sm rounded-lg border border-gray-600 bg-white p-4">
              <p className="mb-4 font-mono text-xl font-medium text-gray-900">
                のうりょく
              </p>
              <div className="gap-8 md:grid md:grid-cols-2">
                <div>
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {ABILITIES.HP}
                    </dt>
                    <dd className="mb-3 flex items-center">
                      <div className="mr-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2.5 rounded bg-blue-600"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {pokemon.hp}
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {ABILITIES.ATACK}
                    </dt>
                    <dd className="mb-3 flex items-center">
                      <div className="mr-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2.5 rounded bg-blue-600"
                          style={{ width: "89%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {pokemon.attack}
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {ABILITIES.DEFENSE}
                    </dt>
                    <dd className="mb-3 flex items-center">
                      <div className="mr-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2.5 rounded bg-blue-600"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {pokemon.defense}
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {ABILITIES.SP_ATK}
                    </dt>
                    <dd className="flex items-center">
                      <div className="mr-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2.5 rounded bg-blue-600"
                          style={{ width: "54%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {pokemon.special_attack}
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {ABILITIES.SP_DEF}
                    </dt>
                    <dd className="mb-3 flex items-center">
                      <div className="mr-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2.5 rounded bg-blue-600"
                          style={{ width: "89%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {pokemon.special_defense}
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {ABILITIES.AGILITY}
                    </dt>
                    <dd className="mb-3 flex items-center">
                      <div className="mr-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2.5 rounded bg-blue-600"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {pokemon.speed}
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div> */}

            <div className="my-8 flex justify-center">
              <Button
                onClick={handler}
                size="lg"
                variant="inverse"
                startIcon={<ArrowNarrowLeftIcon className="h-4 w-4" />}
              >
                まえのページに戻る
              </Button>
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
