import styled from "styled-components";

export const PokemonDetailsWrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  color: black;
  gap: 40px;
  align-items: center;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 2.5rem;
    text-transform: capitalize;
  }
`;

export const PokemonTypes = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0 20px 0;
`;

export const PokemonType = styled.div`
  margin-right: "10px";
  padding: 4px 24px;
  border-radius: 40px;
  font-size: 1rem;
  font-weight: 400;
  text-transform: capitalize;
  color: white;
  margin-right: 16px;
  background: ${(props) => props.bgcolor || "black"};
`;

export const PokemonDescription = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

export const PokemonImageWrapper = styled.div`
  background-color: white;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  position: relative;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

export const PokemonInformations = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 20px 40px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;

  @media screen and (max-width: 992px) {
    padding: 10px 20px;
  }
`;

export const PokemonWeight = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 24px 0;
  font-size: 1rem;
  font-weight: 500;
  background: ${(props) => props.bgcolor || "black"};
  padding: 4px 8px;
  border-radius: 10px;
  color: white;

  p {
    margin: 0 8px;
  }

  span {
    font-size: 1.2rem;
  }
`;

export const EvolutionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 20px;
    text-transform: capitalize;
    text-align: center;
  }
`;

export const EvolutionImageWrapper = styled.div`
  background-color: transparent;
  border-radius: 50%;
  position: relative;
  width: 120px;
  aspect-ratio: 1/1;
  transition: 0.25s ease-in-out;
`;

export const EvolutionLink = styled.a`
  text-decoration: none;
  color: black;

  &:hover > div {
    background: ${(props) => props.bgcolor || "black"};
    transform: 1.25s ease-in-out;
  }
`;
