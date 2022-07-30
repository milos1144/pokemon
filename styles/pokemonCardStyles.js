import styled from "styled-components";

export const PokemonCardWrapper = styled.a`
  background-color: #faf9f6;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  color: black;
  transition: 0.25s ease-in-out;
  animation: fadeIn 0.45s ease-in-out;

  &:hover {
    background-color: #3163a3;
    color: white;
  }

  &:hover img {
    transition: 0.25s ease-in-out;
    transform: scale(1.2);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const PokemonImage = styled.img`
  width: 100%;
  height: 100px;
  margin-bottom: 24px;
  transition: 0.25s ease-in-out;

  @media screen and (max-width: 575px) {
    height: 120px;
  }
`;

export const PokemonName = styled.h3`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 500;
`;
