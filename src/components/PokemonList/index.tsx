import Image from "next/image";
import KindBadge from "@/components/KindBadge";
import type { TopView } from "@/api/models/pokemonModel";

type PokemonListProps = {
  pokemon: TopView;
};

const PokemonList = ({ pokemon }: PokemonListProps) => {
  return (
    <>
      <a href={`/pokemon/${pokemon.entry_number}`}>
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
          <div className="text-left font-mono text-sm">{pokemon.name_ja}</div>
        </div>
        {pokemon.types.split(",").map((s, i) => (
          <KindBadge kind={s} key={i} />
        ))}
      </a>
    </>
  );
};

export default PokemonList;
