import Image from "next/image";
import useSWR from "swr";

type ImagecardProps = {
  imageApiPath: string;
};

async function fetcher(key: string, init?: RequestInit) {
  return await fetch(key, init).then(async (res) => await res.json());
}

const Imagecard = ({ imageApiPath }: ImagecardProps) => {
  const { data: pokemons, error: e1 } = useSWR(imageApiPath, fetcher);
  const { data: species, error: e2 } = useSWR(pokemons?.species?.url, fetcher);

  return (
    <>
      {typeof pokemons !== "undefined" && typeof species !== "undefined" && (
        <>
          <div className="h-2/6 basis-1/6 rounded-md rounded-r-2xl border-solid border-slate-800 p-8 delay-100">
            <Image
              src={
                pokemons?.sprites?.other["official-artwork"]["front_default"]
              }
              alt="ポケモン画像"
              width="200"
              height="200"
            />
            <p className="text-center">
              {
                species?.names?.find(
                  (v: { language: { name: string } }) =>
                    v.language.name === "ja"
                ).name
              }
            </p>
          </div>
        </>
      )}
      {e1 || e2 ? <p>error occured.</p> : <></>}
    </>
  );
};

export default Imagecard;
