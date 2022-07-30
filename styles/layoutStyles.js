import styled from "styled-components";

export const PokemonSection = styled.div`
  background: linear-gradient(to right, #5691c8, #457fca);
  min-height: 100vh;
  padding: 2rem 0 4rem 0;
`;

export const PokemonContainer = styled.div`
  max-width: 1400px;
  padding: 0 4rem;
  margin: auto;

  @media (max-width: 992px) {
    padding: 0 2rem;
  }
`;

export const PokemonLogo = styled.a`
  width: 100%;
  max-width: 240px;
  display: block;
  margin: 0 auto 4rem auto;
`;
