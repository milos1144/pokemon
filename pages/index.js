import { useState } from "react";
import Head from "next/head";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import {
  SearchPokemonInput,
  PokemonListWrapper,
  LoadMoreButton,
} from "../styles/indexStyles";

export default function Home({ pokemons }) {
  const [searchInput, setSearchInput] = useState("");
  const [pokemonCount, setPokemonCount] = useState(8);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handlePokemonCount = () => {
    setPokemonCount((prevState) => prevState + 8);
  };

  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name="description" content="Pokemon App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchPokemonInput
        placeholder="Search Pokemon"
        value={searchInput}
        onInput={(e) => setSearchInput(e.target.value)}
      />
      <PokemonListWrapper>
        {filteredPokemons &&
          filteredPokemons
            .slice(0, pokemonCount)
            .map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
      </PokemonListWrapper>
      <LoadMoreButton onClick={handlePokemonCount}>
        Load More Pokemons
      </LoadMoreButton>
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=500&offset=0"
  );
  return {
    props: {
      pokemons: response.data.results,
    },
  };
}
