import Image from "next/image";
import { useFetchTopView } from "@/hooks";
import { Layout } from "@/layouts";
import KindBadge from "@/components/KindBadge";
import type { TopView } from "@/api/models/pokemonModel";

const Top = () => {
  const { topViewPokemons } = useFetchTopView();

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-6 p-8 md:grid-cols-6">
        {topViewPokemons.map((pokemon: TopView, index: number) => (
          <a
            key={index}
            href={`/pokemon/${encodeURIComponent(pokemon.entry_number)}`}
          >
            <Image
              style={{ backgroundColor: "#e4e4e7" }}
              className="animate-slide-in-bottom"
              src={pokemon.image_url}
              alt={pokemon.name_ja}
              width={200}
              height={200}
            />
            <div className="mb-1">
              <div className="self-center py-2 text-left text-xs text-gray-400">
                #{pokemon.entry_number}
              </div>
              <div className="text-left font-mono text-sm">
                {pokemon.name_ja}
              </div>
            </div>
            {pokemon.types.split(",").map((s, i) => (
              <KindBadge kind={s} key={i} />
            ))}
          </a>
        ))}
      </div>
    </Layout>
  );
};

export default Top;
