import { useState } from "react";
import useSWR from "swr";
import GeneralDialog from "@/pages/components/Elements/Dialog";
import ImagecardList from "@/pages/components/PokemonImage/ImagecardList";

async function fetcher(key: string, init?: RequestInit) {
  return await fetch(key, init).then(async (res) => await res.json());
}

const sliceByNumber = (array: [], number: number) => {
  const length = Math.ceil(array.length / number);

  return new Array(length)
    .fill("")
    .map((_, i) => array.slice(i * number, (i + 1) * number));
};

const Dev = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const { data: pokemons, error } = useSWR(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
    fetcher
  );

  return (
    <>
      <div>
        {typeof pokemons === "undefined" ? (
          <p>loading...</p>
        ) : (
          <>
            <div className="container my-5 px-4">
              <div className="flex justify-between">
                <h1
                  className="basis-1/4 bg-gradient-to-r from-green-500 via-blue-500
        to-pink-500 bg-clip-text text-5xl font-bold
        tracking-tight text-transparent "
                >
                  ポケモン図鑑
                </h1>
                <button
                  className="basis-1/6 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                  onClick={openModal}
                >
                  けんさく
                </button>
              </div>
            </div>
            <p className="my-5 ml-1 px-4">
              現在のポケモン総数は {pokemons.count}体です
            </p>
            {sliceByNumber(pokemons.results, 6).map((element, index) => {
              return <ImagecardList key={index} imageList={element} />;
            })}
            <GeneralDialog isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        )}
        {error ? <p>{error}</p> : null}
      </div>
    </>
  );
};

export default Dev;
