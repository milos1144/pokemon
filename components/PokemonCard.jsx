import Link from "next/link";
import {
  PokemonCardWrapper,
  PokemonImage,
  PokemonName,
} from "../styles/pokemonCardStyles";

const PokemonCard = ({ pokemon }) => {
  const id = pokemon.url.split("/")[6];
  return (
    <Link href={`/pokemon/${pokemon.name}`} passHref>
      <PokemonCardWrapper>
        <PokemonImage
          src={`https://raw.githubusercontent.com/sashafirsov/pokeapi-sprites/6c11303b4416261519c89ab259e9723c2622d128/sprites/pokemon/other/dream-world/${id}.svg`}
        />
        <PokemonName>{pokemon.name}</PokemonName>
      </PokemonCardWrapper>
    </Link>
  );
};

export default PokemonCard;
