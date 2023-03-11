import Image from "next/image";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import { ABILITIES } from "@/constants";
import { Layout } from "@/layouts/";
import { fetchPokemon, fetchPokemons } from "@/lib/fetchPokemons";
import { translateKindToJaLabel } from "@/lib/translator";
import Ability from "@/components/Ability";
import { Button } from "@/components/Elements";
import type { FetchPokemonResponse } from "@/types";

type PokemonProps = {
  pokemon: FetchPokemonResponse;
};

const PokemonDetail = ({ pokemon }: PokemonProps) => {
  return (
    <>
      <Layout>
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <Image
              className="animate-slide-in-bottom"
              src={pokemon.image}
              alt={pokemon.name}
              width={350}
              height={350}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 md:ml-6 md:max-w-sm md:justify-self-end">
              <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {pokemon.name}
              </h5>
              <h5 className="mb-2 text-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                （英: {pokemon.id}）
              </h5>
              <p className="my-3 font-normal text-gray-500 dark:text-gray-400">
                {pokemon.flavorText}
              </p>
            </div>
            <div className="md:mr-6md:max-w-sm mt-12 rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 md:max-w-sm md:justify-self-start">
              <h5 className="mb-2 text-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                分類：{pokemon.genus}
              </h5>
              <h5 className="mb-2 text-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                タイプ：
                {pokemon.types.map((t: { type: { name: string } }, index) => (
                  <span
                    key={index}
                    className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-red-800 dark:bg-red-200 dark:text-red-800"
                  >
                    {translateKindToJaLabel(t.type.name)}
                  </span>
                ))}
              </h5>
            </div>
          </div>
          <div className="mx-auto mt-12 w-full max-w-sm rounded-lg border border-gray-600 bg-white p-4">
            <Ability text={ABILITIES.HP} textAlign="center" numStar={4} />
            <Ability text={ABILITIES.ATACK} textAlign="center" numStar={4} />
            <Ability text={ABILITIES.DEFENSE} textAlign="default" numStar={2} />
            <Ability text={ABILITIES.SP_ATK} textAlign="default" numStar={1} />
            <Ability text={ABILITIES.SP_DEF} textAlign="default" numStar={5} />
            <Ability text={ABILITIES.AGILITY} textAlign="default" numStar={2} />
          </div>
          <div className="my-8 flex justify-center">
            <Button
              size="lg"
              variant="inverse"
              startIcon={<ArrowNarrowLeftIcon className="h-4 w-4" />}
            >
              まえのページに戻る
            </Button>
          </div>
        </>
      </Layout>
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
