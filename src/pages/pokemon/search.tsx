import Image from "next/image";
import Header from "@/components/Header";

// type SearchResultProps = {
//   pokemons: FetchPokemonResponse[];
// };

const SearchResult = () => {
  const pokemons = [
    {
      id: "bulbasaur",
      index: 1,
      name: "フシギダネ",
      flavorText:
        "うまれたときから　せなかに ふしぎな　タネが　うえてあって からだと　ともに　そつという。",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      genus: "たねポケモン",
      types: {
        slot: 1,
        type: [
          {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
          {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        ],
      },
      height: 7,
      weight: 69,
    },
  ];

  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-6 p-8 md:grid-cols-6">
        {pokemons.map((pokemon, index) => (
          <a key={index} href={`/pokemon/${encodeURIComponent(pokemon.id)}`}>
            <Image
              className="animate-slide-in-bottom"
              src={pokemon.image}
              alt={pokemon.name}
              width={200}
              height={200}
            />
            <div className="text-center">{pokemon.name}</div>
          </a>
        ))}
      </div>
    </>
  );
};

export default SearchResult;
