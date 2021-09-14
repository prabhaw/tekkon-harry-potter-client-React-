import React from "react";
import CharacterSection from "../Components/CharacterSection.component";
import HeroSection from "../Components/Herosection.component";
import Navbars from "../Components/Navbar.component";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbars />
      <HeroSection />
      <CharacterSection />
      <div className="mt-5"></div>
    </>
  );
};

export default HomePage;
