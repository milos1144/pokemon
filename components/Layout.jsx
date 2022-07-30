import {
  PokemonContainer,
  PokemonSection,
  PokemonLogo,
} from "../styles/layoutStyles";
import PokemonLogoImg from "../assets/pokemonLogo.png";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <PokemonSection>
      <PokemonContainer>
        <Link href="/" passHref>
          <PokemonLogo>
            <Image src={PokemonLogoImg} alt="Pokemon logo" />
          </PokemonLogo>
        </Link>
        {children}
      </PokemonContainer>
    </PokemonSection>
  );
};

export default Layout;
