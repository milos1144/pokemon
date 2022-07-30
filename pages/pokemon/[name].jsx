import axios from "axios";
import { useState, useEffect } from "react";
import {
  PokemonDescription,
  PokemonDetailsWrapper,
  PokemonType,
  PokemonTypes,
  PokemonImageWrapper,
  PokemonInformations,
  PokemonWeight,
  EvolutionsContainer,
  EvolutionImageWrapper,
  EvolutionLink,
} from "../../styles/pokemonDetailsStyles";
import Link from "next/link";
import Image from "next/image";
import { types } from "../../constants";

const getPokemonId = (item) => item?.url.split("/")[6];

const imageLink = (id) =>
  `https://raw.githubusercontent.com/sashafirsov/pokeapi-sprites/6c11303b4416261519c89ab259e9723c2622d128/sprites/pokemon/other/dream-world/${id}.svg`;

const PokemonDetails = ({
  pokemon,
  pokemonType,
  speciesInfo,
  evolutionChain,
}) => {
  const [evolutions, setEvolutions] = useState([]);
  const [activeEvolution, setActiveEvolution] = useState(null);

  useEffect(() => {
    setEvolutions([
      evolutionChain.chain.species,
      evolutionChain.chain.evolves_to[0]?.species,
      evolutionChain.chain.evolves_to[0]?.evolves_to[0]?.species || null,
    ]);
  }, [evolutionChain]);

  useEffect(() => {
    if (evolutions.length) {
      const index = evolutions.findIndex((item) => item.name === pokemon.name);
      setActiveEvolution(index);
    }
  }, [evolutions, pokemon.name]);

  return (
    evolutions &&
    activeEvolution !== null && (
      <>
        <PokemonDetailsWrapper>
          <PokemonImageWrapper>
            <Image src={imageLink(pokemon.id)} alt="pokemon" layout="fill" />
          </PokemonImageWrapper>
          <PokemonInformations>
            <h1>{pokemon.name}</h1>
            <PokemonTypes>
              {pokemon.types.map((type) => (
                <PokemonType
                  key={type.type.name}
                  bgcolor={types[type.type.name]}
                >
                  {type.type.name}
                </PokemonType>
              ))}
            </PokemonTypes>

            <PokemonDescription>
              {speciesInfo.flavor_text_entries[1].flavor_text.replace(
                "\f",
                " "
              )}{" "}
              {speciesInfo.flavor_text_entries[2].flavor_text.replace(
                "\f",
                " "
              )}{" "}
              {speciesInfo.flavor_text_entries[3].flavor_text.replace(
                "\f",
                " "
              )}
            </PokemonDescription>
            <PokemonWeight bgcolor={types[pokemonType]}>
              <p>
                Weight: <span>{pokemon.weight}kg</span>
              </p>{" "}
              <p>
                Height: <span>{pokemon.height}m</span>
              </p>
            </PokemonWeight>
            <EvolutionsContainer>
              {evolutions[activeEvolution - 1] ? (
                <Link
                  href={`/pokemon/${evolutions[activeEvolution - 1].name}`}
                  passHref
                >
                  <EvolutionLink bgcolor={types[pokemonType]}>
                    <EvolutionImageWrapper>
                      <Image
                        src={imageLink(
                          getPokemonId(evolutions[activeEvolution - 1])
                        )}
                        layout="fill"
                        alt="Pokemon"
                      />
                    </EvolutionImageWrapper>
                    <p>
                      {evolutions[activeEvolution - 1]?.name !== pokemon.name &&
                        evolutions[activeEvolution - 1]?.name}
                    </p>
                  </EvolutionLink>
                </Link>
              ) : (
                <div></div>
              )}
              {evolutions[activeEvolution]?.name !== pokemon.name && (
                <Link
                  href={`/pokemon/${evolutions[activeEvolution].name}`}
                  passHref
                >
                  <EvolutionLink bgcolor={types[pokemonType]}>
                    <EvolutionImageWrapper>
                      <Image
                        src={imageLink(
                          getPokemonId(evolutions[activeEvolution])
                        )}
                        alt="Pokemon"
                        layout="fill"
                      />
                    </EvolutionImageWrapper>
                    <p>evolutions[activeEvolution]?.name</p>
                  </EvolutionLink>
                </Link>
              )}
              {evolutions[activeEvolution + 1] ? (
                <Link
                  href={`/pokemon/${evolutions[activeEvolution + 1].name}`}
                  passHref
                >
                  <EvolutionLink bgcolor={types[pokemonType]}>
                    <EvolutionImageWrapper>
                      <Image
                        src={imageLink(
                          getPokemonId(evolutions[activeEvolution + 1])
                        )}
                        alt="Pokemon"
                        layout="fill"
                      />
                    </EvolutionImageWrapper>
                    <p>
                      {evolutions[activeEvolution + 1]?.name !== pokemon.name &&
                        evolutions[activeEvolution + 1]?.name}
                    </p>
                  </EvolutionLink>
                </Link>
              ) : (
                <div></div>
              )}
            </EvolutionsContainer>
          </PokemonInformations>
        </PokemonDetailsWrapper>
      </>
    )
  );
};

export default PokemonDetails;

export const getStaticPaths = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=500&offset=0"
  );

  const paths = response.data.results.map((pokemon) => {
    return {
      params: { name: pokemon.name },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.name.toLowerCase();

  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const speciesResponse = await axios.get(response.data.species.url);
  const evolutionResponse = await axios.get(
    speciesResponse.data.evolution_chain.url
  );

  return {
    props: {
      pokemon: response.data,
      pokemonType: response.data.types[0].type.name,
      speciesInfo: speciesResponse.data,
      evolutionChain: evolutionResponse.data,
    },
  };
};
