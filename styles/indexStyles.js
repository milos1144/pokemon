import styled from "styled-components";

export const SearchPokemonInput = styled.input`
  width: 100%;
  max-width: 480px;
  height: 44px;
  border-radius: 20px;
  padding: 1rem;
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 400;
  display: block;
  margin: 0 auto 6rem auto;
`;

export const PokemonListWrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */
  grid-template-columns: repeat(4, 1fr);
  justify-content: "center";
  gap: 20px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 4rem auto 0 auto;
  background-color: #3163a3;
  color: white;
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: 0.25s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
